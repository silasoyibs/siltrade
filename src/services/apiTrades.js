import supabase from "./supabase";

export async function getTrades(page, limit) {
  let query = supabase.from("Trades").select("*", { count: "exact" });

  // Apply pagination only if page & limit are provided
  if (page !== undefined && limit !== undefined) {
    console.log("not working");
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Trades could not be loaded");
  }

  // If pagination is used, return both data and totalCount
  if (page !== undefined && limit !== undefined) {
    return { data, totalCount: count };
  }
  console.log("working");
  // Otherwise, return just the trades (like your original function)
  return data;
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
