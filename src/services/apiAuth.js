import supabase from "./supabase";

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
  return data;
}
export async function signinWithGoggle() {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
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
  const { error } = supabase.auth.signOut();
  console.log(error.message);
}
