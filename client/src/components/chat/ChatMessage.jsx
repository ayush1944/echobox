import React from 'react';
import { Bot, User } from 'lucide-react';

const ChatMessage = ({ message }) => {
    const isBot = message.role === 'bot';
    return (
        <div className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
            {isBot && <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0"><Bot size={20} /></div>}
            <div className={`max-w-xl p-3 rounded-xl ${isBot ? 'bg-gray-700' : 'bg-blue-600'}`}>
                <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
            {!isBot && <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><User size={20} /></div>}
        </div>
    );
};

export default ChatMessage;