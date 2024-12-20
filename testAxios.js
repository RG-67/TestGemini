import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.api_key);
const model = genAi.getGenerativeModel({model: "gemini-1.5-flash"});
const result = await model.generateContent(prompt);
console.log("GeminiResponse ==>", result.response.text());