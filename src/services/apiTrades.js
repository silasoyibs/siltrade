import supabase from "./supabase";

export async function getTrades() {
  const { data, error } = await supabase.from("Trades").select("*");
  if (error) throw new Error("All trades could not be loaded");
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

export async function getPaginatedTrades(page, limit, filters) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from("Trades").select("*", { count: "exact" });

  // ----- Filter by status -----
  if (filters?.status && filters.status !== "All") {
    query = query.eq("status", filters.status);
  }

  // ----- Filter by date -----
  if (filters?.dateRange && filters.dateRange !== "All") {
    const now = new Date();

    if (filters.dateRange === "This month") {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      query = query.gte("date", startOfMonth.toISOString());
    }

    if (filters.dateRange === "Last 30 days") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(now.getDate() - 30);
      query = query.gte("date", thirtyDaysAgo.toISOString());
    }

    if (filters.dateRange === "Last 90 days") {
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(now.getDate() - 90);
      query = query.gte("date", ninetyDaysAgo.toISOString());
    }
  }

  // ----- Apply pagination -----
  const { data, error, count } = await query.range(from, to);

  if (error) throw new Error("Trades could not be loaded");

  return { data, totalCount: count };
}
