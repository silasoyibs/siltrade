import supabase from "./supabase";

export async function getTrades() {
  let { data, error } = await supabase.from("Trades").select("*");
  if (error) throw new Error("Trades could not be loaded");
  return { data };
}
