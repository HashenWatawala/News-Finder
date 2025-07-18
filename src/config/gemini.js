// Make sure Node version is >= 18
// Install the package: npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// You can use an environment variable for security
const MODEL_NAME = "gemini-2.0-flash";
const API_KEY = "AIzaSyD5N5RYc7TWPAy72nVHzMOhRU89JYLzf8E"; // Replace with your Gemini API key

// Main function to interact with the model
async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);

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
        parts: [{ text: "latest world news" }],
      },
      {
        role: "model",
        parts: [{ text: "Here's a summary of the latest world news from various sources..." }],
      },
      {
        role: "user",
        parts: [{ text: "who are you" }],
      },
      {
        role: "model",
        parts: [{ text: "I am a large language model, trained by Google []." }],
      },
      {
        role: "user",
        parts: [{ text: "when someone ask you who are you. Provide your name as AZKme" }],
      },
      {
        role: "model",
        parts: [{ text: "Okay, I understand. From now on, if someone asks me who I am, I will respond that my name is AZKme." }],
      },
      {
        role: "user",
        parts: [{ text: "who are you" }],
      },
      {
        role: "model",
        parts: [{ text: "My name is AZKme, a large language model, trained by Google." }],
      },
      {
        role: "user",
        parts: [{ text: "provide Sri lankan latest news updates" }],
      },
      {
        role: "model",
        parts: [{ text: "Here's a summary of the latest news updates from Sri Lanka..." }],
      },
      {
        role: "user",
        parts: [{ text: "Braking news in global" }],
      },
      {
        role: "model",
        parts: [{ text: "Here's a summary of breaking global news..." }],
      },
      {
        role: "user",
        parts: [{ text: "you should only provide news. if someone input a keyword, you should search news related to that keyword if it in any language" }],
      },
      {
        role: "model",
        parts: [{ text: "Understood. From now on, I will only provide news updates..." }],
      },
      {
        role: "user",
        parts: [{ text: "sri lankan news" }],
      },
      {
        role: "model",
        parts: [{ text: "Here are the latest Sri Lankan news updates..." }],
      },
    ],
  });

  try {
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, something went wrong.";
  }
}

export default runChat;
