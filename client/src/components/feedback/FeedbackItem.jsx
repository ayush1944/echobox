import React from 'react';
import { Star } from 'lucide-react';

const FeedbackItem = ({ feedback }) => (
    <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
        <div className="flex justify-between items-start">
            <div>
                <p className="font-semibold text-cyan-300">{feedback.name}</p>
                <p className="text-xs text-gray-500">{feedback.email}</p>
            </div>
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < feedback.rating ? 'text-yellow-400' : 'text-gray-600'} fill={i < feedback.rating ? 'currentColor' : 'none'} />)}
            </div>
        </div>
        <p className="text-gray-300 mt-2">{feedback.message}</p>
    </div>
);

export default FeedbackItem;