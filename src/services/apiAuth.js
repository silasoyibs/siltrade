import supabase from "./supabase";

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
  return data;
}
export async function googleAuth() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    // options: {
    //   redirectTo: "http://localhost:5173/dashboard",
    // },
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function signin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function signout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data.user;
}
// https://zrbqksmddaoilqirvzhr.supabase.co/auth/v1/callback
// 905328411943-82gch91u6t09appalg037tb65ogmdd8a.apps.googleusercontent.com
