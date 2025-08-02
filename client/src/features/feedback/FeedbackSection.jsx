import React, { useState } from 'react';
import { MessageSquare, PlusCircle } from 'lucide-react';
import { useFeedbacks } from '../../hooks/useFeedbacks';
import FeedbackList from '../../components/feedback/FeedbackList';
import FeedbackForm from '../../components/feedback/FeedbackForm';

const FeedbackSection = () => {
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { feedbacks, addFeedback } = useFeedbacks();

    const handleSubmit = async (data) => {
        setIsSubmitting(true);
        const success = await addFeedback(data);
        setIsSubmitting(false);
        if (success) {
            setShowForm(false);
        }
    };

    return (
        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2"><MessageSquare className="text-cyan-400" /> Feedbacks</h2>
                <button onClick={() => setShowForm(!showForm)} className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg flex items-center gap-2">
                    <PlusCircle size={20} /> {showForm ? 'Close' : 'Add'}
                </button>
            </div>
            {showForm && <FeedbackForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />}
            <FeedbackList feedbacks={feedbacks} />
        </div>
    );
};

export default FeedbackSection;