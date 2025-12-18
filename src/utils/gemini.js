import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function getMovieRecommendations(query) {
  const prompt = `
Act as a movie recommendation system.
Suggest exactly 5 movies for: "${query}"
Return only comma-separated movie names.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
