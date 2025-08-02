import React from 'react';
import FeedbackSection from './features/feedback/FeedbackSection';
import ChatInterface from './features/chat/ChatInterface';

function App() {
    return (
        <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col lg:flex-row p-4 gap-4">
            <div className="lg:w-1/3 flex flex-col gap-4">
                <header className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <h1 className="text-2xl font-bold text-cyan-400">echobox</h1>
                    <p className="text-sm text-gray-400">AI-Powered Feedback & QnA Tracker</p>
                </header>
                <FeedbackSection />
            </div>
            <ChatInterface />
        </div>
    );
}

export default App;