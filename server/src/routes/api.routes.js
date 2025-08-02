import express from 'express';
import { getFeedbacks, submitFeedback } from '../controller/feedback.controller.js';
import { askAI } from '../controller/ai.controller.js';

const router = express.Router();

// Define routes
router.get('/feedback', getFeedbacks);
router.post('/feedback', submitFeedback);
router.post('/ask', askAI);

export default router;
