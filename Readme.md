# Echobox - AI-Powered Feedback & QnA Tracker

![Echobox Screenshot]<img width="2048" height="1164" alt="Image" src="https://github.com/user-attachments/assets/945f1a42-a1e7-4aec-99e2-38c1427981ce" /> **Echobox** is a full-stack web application designed to collect, manage, and analyze user feedback with the power of Google's Gemini AI. It provides a seamless interface for users to submit their thoughts and ask questions, receiving intelligent, real-time answers from an AI assistant.

[![Deploy with Vercel](https://vercel.com/button)](https://echoboxurl.vercel.app/) ---

## 🚀 Features

- **📝 Feedback Submission**: A clean, intuitive form for users to submit feedback with their name, email, message, and a star rating.
- **📊 Feedback Dashboard**: View all submitted feedback in a neatly organized list, sorted by the most recent.
- **🤖 AI-Powered QnA**: A real-time chat interface connected to the **Google Gemini Pro API** that can answer user questions on any topic.
- **💾 Persistent Storage**: All feedback is securely stored in a **MongoDB Atlas** cloud database.
- **⚙️ Modular Architecture**: The backend is built with a scalable, modular structure (routes, controllers, models), and the frontend uses a feature-based component architecture with custom hooks.
- **🚀 One-Click Deployment**: Configured for easy and seamless deployment on **Vercel**.

---

## 🛠️ Tech Stack

| Category      | Technology                                    |
|---------------|-----------------------------------------------|
| **Frontend** | React, Vite, Tailwind CSS                     |
| **Backend** | Node.js, Express.js (ES6 Modules)             |
| **Database** | MongoDB with Mongoose                         |
| **AI Model** | Google Gemini Pro                             |
| **Deployment**| Vercel                                        |

---

## 🏁 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier is sufficient)
- A [Google AI Studio API Key](https://aistudio.google.com/) for Gemini

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/echoboxurl.git](https://github.com/ayush1944/echobox.git)
    cd your-repo-name
    ```

2.  **Set up the Backend:**
    ```bash
    # Navigate to the server directory
    cd server

    # Install dependencies
    npm install

    # Create a .env file in the /server directory
    # and add your secrets
    touch .env
    ```
    Your **`server/.env`** file should look like this:
    ```
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
    MONGO_URI=YOUR_MONGODB_CONNECTION_STRING_HERE
    ```

3.  **Set up the Frontend:**
    ```bash
    # Navigate to the client directory from the root
    cd ../client

    # Install dependencies
    npm install
    ```

### Running the Application

1.  **Start the Backend Server:**
    ```bash
    # From the /server directory
    npm start
    ```
    The backend will be running on `http://localhost:5000`.

2.  **Start the Frontend Development Server:**
    ```bash
    # From the /client directory
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 📁 Project Structure

The project uses a monorepo structure, with the client and server clearly separated for maintainability.
