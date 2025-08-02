import React from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbacks }) => (
    <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
        {feedbacks.length > 0 ? (
            feedbacks.map(fb => <FeedbackItem key={fb._id || fb.id} feedback={fb} />)
        ) : (
            <p className="text-gray-500 text-center mt-4">No feedback submitted yet.</p>
        )}
    </div>
);

export default FeedbackList;