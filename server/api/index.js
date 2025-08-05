// server.js or api/index.js (your entry point)
import express from 'express';
import mongoose from 'mongoose';
import Feedback from './models/feedback.js'; // Adjust if needed
import serverless from 'serverless-http';

const app = express();

// Manual CORS headers - more reliable in serverless functions
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://echobox-one.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo Error:", err));

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
