import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY, // Make sure this is in your .env
  dangerouslyAllowBrowser: true, // ONLY for MVP testing — not safe for production
});

export async function getAiInsight(trades) {
  // Limit to most recent 30 trades
  const recentTrades = trades?.slice(0, 30) || [];
  console.log(recentTrades);

  const tradesSummary = JSON.stringify(recentTrades, null, 2);

  const completion = await groq.chat.completions.create({
    model: "llama3-70b-8192", // Best Groq model for analysis
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    messages: [
      {
        role: "system",
        content: `You are a trading performance coach and market analyst. Respond ONLY in valid JSON, no extra commentary. Each field must have a concise answer of LESS than 20 words.
        If it would exceed, summarize further`,
      },
      {
        role: "user",
        content: `
Here are my most recent trades:

${tradesSummary}

Analyze them and return insights in this JSON format:
{
  "patternRecognition": "Describe repeated chart setups, trade patterns, or habits observed.",
  "riskManagement": "Comment on stop loss use, position sizing, and exposure control.",
  "performanceInsights": "Summarize overall strengths, weaknesses, and actionable improvements."
}
        `,
      },
    ],
  });

  const raw = completion.choices[0]?.message?.content || "";

  try {
    let cleaned = raw.trim();
    // Remove ```json or ``` if present
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```[a-z]*\n?/i, "").replace(/```$/, "");
    }
    const insights = JSON.parse(cleaned);
    return insights;
  } catch (error) {
    console.error("Invalid JSON from AI:", raw);
    throw new Error("Invalid JSON from AI");
  }
}
