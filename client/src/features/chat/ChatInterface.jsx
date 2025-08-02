import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import ChatMessage from '../../components/chat/ChatMessage';
import LoadingIndicator from '../../components/chat/LoadingIndicator';

const ChatInterface = () => {
    const [input, setInput] = useState('');
    const { messages, isLoading, sendMessage } = useChat();
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        sendMessage(input);
        setInput('');
    };

    return (
        <div className="lg:w-2/3 flex flex-col bg-gray-800/50 rounded-xl border border-gray-700 h-[95vh] lg:h-auto">
            <header className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold flex items-center gap-2"><Bot className="text-cyan-400" /> echobox AI</h2>
            </header>
            <main className="flex-grow p-4 overflow-y-auto space-y-4">
                {messages.map((msg, i) => <ChatMessage key={i} message={msg} />)}
                {isLoading && <LoadingIndicator />}
                <div ref={chatEndRef} />
            </main>
            <footer className="p-4 border-t border-gray-700">
                <div className="relative">
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                        className="w-full bg-gray-700 rounded-xl p-3 pr-12"
                        placeholder="Ask anything..."
                        rows="1"
                    />
                    <button onClick={handleSend} disabled={isLoading} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-cyan-500 rounded-full hover:bg-cyan-600 disabled:bg-gray-500">
                        <Send size={20} className="text-white" />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default ChatInterface;