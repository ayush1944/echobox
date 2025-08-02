import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../src/config/db.js';
import apiRoutes from '../src/routes/api.routes.js';

import expressHttpHandler from 'express-http-handler';
const { handler } = expressHttpHandler;

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: 'https://echobox-one.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());
app.use('/api', apiRoutes);

// ✅ Export for Vercel
export default handler(app);
