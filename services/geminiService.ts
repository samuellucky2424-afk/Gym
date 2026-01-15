
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Cino Universal Gym Assistant". You help potential members in Nigeria find the right fitness program.
Gym location: 52b, Ujoelen Road, Akahia, Nigeria.
Operating Hours: 24/7.
Programs Available:
1. SWEAT (Weight Loss)
2. Fantastic Body (Glutes)
3. Strength Unleashed (Bodybuilding)
4. Personal Training
5. Online Training
6. Massage & Physiotherapy
7. Steam Sauna
8. Maderotherapy

Keep responses short, professional, and high-energy. Use Nigerian English nuances where appropriate (e.g., "Oga", "My friend", "Sharp sharp").
Focus on encouraging users to visit the gym or join a program.
`;

export async function getGymAdvice(userPrompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        maxOutputTokens: 250,
      },
    });
    return response.text || "I'm having trouble connecting to the trainer's station. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our trainers are currently assisting members on the floor. Please call us directly for immediate help!";
  }
}
