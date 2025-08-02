import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const geminiApiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const askAI = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ message: 'Question is required' });
    }

    const prompt = `
The user has described a product, service, or experience. Rewrite their input as a natural, positive feedback message, as if they are sharing a short review or testimonial.

- Use a casual, first-person tone.
- Keep it detailed, friendly, and expressive.
- Add a bit of enthusiasm or personalization if appropriate.

User input: "${question}"
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    res.status(200).json({ answer: text });

  } catch (error) {
    res.status(500).json({ message: 'Error communicating with AI' });
  }
};
