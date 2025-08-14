import supabase from "./supabase";

export async function getTrades() {
  const { data: Trades, error } = await supabase.from("Trades").select("*");
  if (error) {
    throw new Error("Trades could not be loaded");
  }
  return Trades;
}

export async function createNewTrade(newTrade) {
  const { data, error } = await supabase
    .from("Trades")
    .insert([{ ...newTrade }]);
  if (error) throw new Error(error.message, "could not create new trade");
  console.log("data sucessfully inserted");
  return { data };
}

export async function deleteTrade(id) {
  const { error } = await supabase.from("Trades").delete().eq("id", id);
  if (error) {
    throw new Error("Trade could not be deleted");
  } else {
    console.log("trade has been deleted");
  }
}

export async function editTrade(id, editedValues) {
  const { data, error } = await supabase
    .from("Trades")
    .update({ ...editedValues })
    .eq("id", id)
    .select();
  if (error) {
    throw new Error("Trade could not be edited");
  }

  return { data };
}

export async function getRecentTrades() {
  const { data: recentTrades, error } = await supabase
    .from("Trades")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);
  if (error) {
    throw new Error("Trades could not be loaded");
  }
  return recentTrades;
}
