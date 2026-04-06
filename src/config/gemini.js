import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
  apiKey: "AIzaSyBLDtbeIqfYPhoxiKBU59vwGBQk-_6Q2T4"
});

const generate = async (prompt, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      console.log("Full response:", response);
      return response.text();

    } catch (error) {
      console.error(`Gemini Error (Attempt ${attempt}/${retries}):`, error);

      // Check if it's a quota/rate limit error (429)
      if (error.status === "RESOURCE_EXHAUSTED" || error.error?.code === 429) {
        if (attempt < retries) {
          const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
          console.log(`Quota exceeded. Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        return "API quota exceeded. Please try again later or upgrade your plan.";
      }

      // For other errors on last attempt
      if (attempt === retries) {
        return "Error generating response";
      }
    }
  }
};


export default generate;
