import { useState, useEffect, useCallback } from 'react';
import { getFeedbacks, submitFeedback } from '../services/api';

export const useFeedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        getFeedbacks().then(setFeedbacks).catch(console.error);
    }, []);

    const addFeedback = useCallback(async (data) => {
        try {
            const newFeedback = await submitFeedback(data);
            setFeedbacks(prev => [newFeedback, ...prev]);
            return true; // Indicate success
        } catch (error) {
            console.error("Failed to add feedback:", error);
            return false; // Indicate failure
        }
    }, []);

    return { feedbacks, addFeedback };
};