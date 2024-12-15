import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();


const userPromptEntry = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
            return res.status(400).json({ status: false, message: "Prompt is required and must be a non-empty string" });
        }
        const genAi = new GoogleGenerativeAI(process.env.api_key);
        const model = genAi.getGenerativeModel({model: "gemini-1.5-flash"});
        const result = await model.generateContent(prompt);
        console.log("GeminiResponse ==>", result.response.text());   
        return res.status(200).json({status: true, message: result.response.text()});   
    } catch (error) {
        console.error("ErrorResponse ==>", error);
        return res.status(400).json({status: false, message: error});
    }
}

export default userPromptEntry;