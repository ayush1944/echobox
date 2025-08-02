import React, { useState } from 'react';
import { Star } from 'lucide-react';

const FeedbackForm = ({ onSubmit, isSubmitting }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message || rating === 0) {
            alert('Please fill all fields and provide a rating.');
            return;
        }
        onSubmit({ name, email, message, rating });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6 p-4 bg-gray-800 rounded-lg">
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" required />
            <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" required />
            <textarea placeholder="Your Feedback" value={message} onChange={e => setMessage(e.target.value)} className="w-full bg-gray-700 p-2 rounded-md h-24" required />
            <div className="flex items-center gap-2">
                <span className="text-gray-400">Rating:</span>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className={`cursor-pointer ${rating >= star ? 'text-yellow-400' : 'text-gray-600'}`} onClick={() => setRating(star)} fill={rating >= star ? 'currentColor' : 'none'} />)}
                </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg disabled:bg-gray-500">
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default FeedbackForm;