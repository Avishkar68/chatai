# 🚀 Gemini AI Chat - Full-Stack MERN App

A modern, ChatGPT-inspired AI chat application built with Express, React, and Node.js, integrated with the Google Gemini API.

## ✨ Features
- **Modern UI**: Clean, responsive design using Tailwind CSS.
- **Premium Aesthetics**: Smooth animations with Framer Motion and glassmorphism effects.
- **Security**: Gemini API calls proxied through the backend to protect your API key.
- **Smart Input**: Auto-growing textarea with Shift+Enter support.
- **Typing Animation**: Realistic AI response indicators.
- **Rate Limiting**: Protection against API abuse.

---

## 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Google Gemini API Key](https://aistudio.google.com/app/apikey)

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the `server` directory:

```bash
touch server/.env
```

Add the following to `server/.env`:
```env
PORT=5000
GEMINI_API_KEY=your_actual_gemini_api_key
```

### 3. How to get a Gemini API Key?
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Click on **"Create API key in new project"**.
3. Copy the generated key and paste it into your `server/.env` file.

### 4. Run the Project

**Start Backend Server:**
```bash
cd server
npm start # or node server.js
```

**Start Frontend Development Server:**
```bash
cd client
npm run dev
```

The app will be available at `http://localhost:5173` and the API at `http://localhost:5000`.

---

## 📂 Project Structure

```
chatai/
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/    # ChatMessage, ChatInput, LoadingDots
│   │   ├── App.jsx        # Main Logic & Layout
│   │   └── index.css      # Tailwind & Global Styles
│   └── tailwind.config.js
└── server/                # Node.js Backend
    ├── routes/            # API Routes (chat.js)
    ├── server.js          # Express App Setup
    └── .env               # API Key
```

---

## 📡 Example API Request

**POST** `/api/chat`
```json
{
  "message": "Hello, how are you?",
  "sessionId": "user-123"
}
```

**Response:**
```json
{
  "message": "I'm doing well, thank you for asking! How can I help you today?"
}
```

---

## 🚀 Deployment

### Frontend (Vercel)
1. Push your code to GitHub.
2. Connect your repo to [Vercel](https://vercel.com/).
3. Set the root directory to `client`.
4. Add environment variables if needed.

### Backend (Render/Heroku)
1. Set the root directory to `server`.
2. Add `GEMINI_API_KEY` to the environment variables on the platform.
3. Ensure the `PORT` is handled dynamically by the platform.

---

## 📝 License
MIT License. Feel free to use and modify!
