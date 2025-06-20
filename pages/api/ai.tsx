import OpenAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY, // Keep this env var as-is
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Invalid or missing 'prompt' in request body." });
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 150,
    });

//    res.status(200).json({ result: chatCompletion.choices[0].message?.content });
const raw = chatCompletion.choices[0].message?.content || "";

    // 2. Strip out bold (**text**), italics (*text*), and any stray * characters
    const cleaned = raw.replaceAll('**', '')     // Remove all double asterisks

    // 3. Return cleaned text
    res.status(200).json({ result: cleaned });
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}