import { useState } from 'react';
import { askAI } from '../services/api';

export const useChat = () => {
    const [messages, setMessages] = useState([{ role: 'bot', text: 'Hello! How can I help you today?' }]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (userInput) => {
        if (!userInput.trim()) return;
        setMessages(prev => [...prev, { role: 'user', text: userInput }]);
        setIsLoading(true);
        try {
            const { answer } = await askAI(userInput);
            setMessages(prev => [...prev, { role: 'bot', text: answer }]);
        } catch {
            setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };
    return { messages, isLoading, sendMessage };
};