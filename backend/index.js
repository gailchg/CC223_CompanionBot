const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const admin = require('firebase-admin');

let serviceAccount;

if (process.env.NODE_ENV === 'production') {
  // 🔐 Use secret file path in Render
  serviceAccount = require('/etc/secrets/cc223-ta3-firebase-adminsdk-fbsvc-8b89858fed.json');
} else {
  // 💻 Use local JSON file (which is .gitignored)
  serviceAccount = require('./cc223-ta3-firebase-adminsdk-fbsvc-8b89858fed.json');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});




const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    // Save chat log to Firestore
    await db.collection('chatLogs').add({
      userMessage: message,
      botReply: reply,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ reply });
  } catch (error) {
    console.error('OpenRouter Error:', error.message);
    res.status(500).json({ error: 'Something went wrong with OpenRouter API' });
  }
});

// Use dynamic port for deployment (e.g., Render)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running with OpenRouter at http://localhost:${PORT}`);
});
