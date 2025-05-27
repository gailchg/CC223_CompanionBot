# CC223 CompanionBot

## Overview

CC223 CompanionBot is an AI-powered chatbot application that enables users to interact conversationally with the help of OpenRouter API. The app features a React frontend, an Express backend, and uses Firebase Firestore to store chat logs. The backend is deployed on Render.com for seamless cloud hosting.

---

## Technologies Used

- **Frontend:** React.js  
- **Backend:** Node.js with Express.js  
- **Database:** Firebase Firestore  
- **AI Integration:** OpenRouter API  
- **Deployment:** Render.com (backend hosting)

**Rationale:**  
React provides a fast, component-based UI experience; Express enables a lightweight, flexible backend; Firestore offers a scalable NoSQL database with real-time capabilities; OpenRouter API provides powerful AI chat completions; Render.com simplifies backend deployment with automatic environment variable handling.

---

## Getting Started - Run Locally

### Prerequisites

- Node.js (v14+ recommended)
- npm (comes with Node.js)
- Firebase account with Firestore enabled
- OpenRouter API key

### Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/yourusername/CC223_CompanionBot.git
cd CC223_TA3

2. Backend Setup

cd backend
npm install

3. Frontend Setup

cd ../frontend
npm install

4. Environment configuration

In the backend folder, create a .env file and add:
OPENROUTER_API_KEY=your_openrouter_api_key_here
NODE_ENV=development
PORT=5000

5. Firebase Service Account

Place your Firebase service account JSON file (named something like cc223-ta3-firebase-adminsdk-fbsvc-xxxx.json) inside the backend/ folder.

Make sure your backend index.js references this file correctly, for example:
const serviceAccount = require('./cc223-ta3-firebase-adminsdk-fbsvc-xxxx.json');

6. Start Backend Server

cd backend
node index.js

7. Start Frontend Server

cd frontend
npm start




