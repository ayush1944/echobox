import Feedback from '../models/feedback.js';

export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const submitFeedback = async (req, res) => {
    try {
        const { name, email, message, rating } = req.body;
        if (!name || !email || !message || !rating) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newFeedback = await Feedback.create({ name, email, message, rating });
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};