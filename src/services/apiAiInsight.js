<<<<<<< HEAD
import Groq from "groq-sdk";

const groq = new Groq({
  // apiKey: import.meta.env.VITE_GROQ_API_KEY, // Make sure this is in your .env
  dangerouslyAllowBrowser: true, // ONLY for MVP testing — not safe for production
});

=======
>>>>>>> feat(journal-trade)-pagination
export async function getAiInsight(trades) {
  const url =
    "https://zrbqksmddaoilqirvzhr.supabase.co/functions/v1/rapid-worker";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ trades }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching trading analysis:", err);
    throw err;
  }
}
