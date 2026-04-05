import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCo6uhWzUYi6J7jtWfOXXgTO1gDTKeLa0g";
const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });

async function generate(prompt, onChunk) {
  const response = await genAI.generateContent({
    model: "gemini-1.5-pro",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
        ],
      },
    ],
  });

  const text = response.output?.[0]?.content?.[0]?.text ?? "";

  if (onChunk) onChunk(text);
  return text;
}

export default generate;