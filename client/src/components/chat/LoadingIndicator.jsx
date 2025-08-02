import React from 'react';
import { Bot } from 'lucide-react';

const LoadingIndicator = () => (
    <div className="flex items-start gap-3 justify-start">
        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0"><Bot size={20} /></div>
        <div className="p-3 rounded-xl bg-gray-700 flex items-center space-x-1">
            <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </div>
    </div>
);

export default LoadingIndicator;