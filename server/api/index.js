import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'https://echobox-one.vercel.app', // frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

// Sample route
app.get('/api/feedback', (req, res) => {
  res.json({ message: 'Feedback data fetched successfully' });
});

// Start server (Only for local or dev)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// For Vercel serverless export
export default app;
