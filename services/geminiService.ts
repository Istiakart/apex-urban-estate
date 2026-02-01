
import { GoogleGenAI } from "@google/genai";

// Use the correct initialization pattern as per Google GenAI SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getNeighborhoodInsights = async (location: string, userLat?: number, userLng?: number) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide detailed insights about the neighborhood of ${location}. Include amenities, schools, transit, and overall vibe.`,
      config: {
        tools: [{ googleMaps: {} }, { googleSearch: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: userLat !== undefined && userLng !== undefined ? { latitude: userLat, longitude: userLng } : undefined
          }
        }
      },
    });

    const text = response.text || "No insights available.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const links = chunks.map((chunk: any) => {
      if (chunk.maps) return { title: chunk.maps.title, uri: chunk.maps.uri };
      if (chunk.web) return { title: chunk.web.title, uri: chunk.web.uri };
      return null;
    }).filter(Boolean);

    return { text, links };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { text: "Failed to fetch neighborhood insights.", links: [] };
  }
};

export const chatWithAssistant = async (message: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Context about current properties: ${context}\n\nUser Question: ${message}`,
      config: {
        systemInstruction: "You are an expert real estate consultant. Use the provided property context to answer questions professionally. Be helpful, concise, and persuasive but honest.",
      },
    });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting right now.";
  }
};
