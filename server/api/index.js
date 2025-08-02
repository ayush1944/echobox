import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Feedback from './models/feedback.js'; // update path as needed
import serverless from 'serverless-http';

const app = express();

app.use(cors({
  origin: 'https://echobox-one.vercel.app', // allow frontend origin
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Mongo Error:', err));

// Routes
app.get('/api/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Export for Vercel
export default serverless(app);
