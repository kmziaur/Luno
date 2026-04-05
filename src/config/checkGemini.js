import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI({
  apiKey: "AIzaSyCo6uhWzUYi6J7jtWfOXXgTO1gDTKeLa0g",
});

async function checkGemini() {
  try {
    const response = await genAI.generateContent({
      model: "gemini-1.5-pro",
      messages: [
        {
          role: "user",
          content: [{ type: "text", text: "Hello, is Gemini working?" }],
        },
      ],
    });

    console.log(
      "Gemini response:",
      response.output?.[0]?.content?.[0]?.text ?? response
    );
  } catch (error) {
    console.error("Gemini API check failed:", error);
  }
}

export default checkGemini;