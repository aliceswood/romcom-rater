import { supabase } from '../../lib/initSupabase';

export default async function registerUser(req, res) {
  const { email, password, name, username } = req.body


  let { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        username: username
      },
    },
  });

  console.log("error", error);
  console.log("user", user);
  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json({ user: user })
}

