import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-2.0-flash";
const API_KEY = "AIzaSyD5N5RYc7TWPAy72nVHzMOhRU89JYLzf8E"; // Replace with your real key or use env vars

const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat(prompt) {
  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
  });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "you should only provide news. if someone input a keyword, you should search news related to that keyword if it in any language" }],
      },
      {
        role: "model",
        parts: [{ text: "Understood. I will now only provide news summaries based on the keyword input." }],
      },
      {
        role: "user",
        parts: [{ text: "when someone ask you who are you. Provide your name as AZKme" }],
      },
      {
        role: "model",
        parts: [{ text: "Okay, I understand. From now on, if someone asks me who I am, I will respond that my name is AZKme." }],
      },
    ],
  });

  try {
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, something went wrong while fetching news.";
  }
}

export default runChat;
