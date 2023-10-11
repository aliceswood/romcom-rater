import { supabase } from "../../../lib/initSupabase";
import { serialize } from 'cookie';

export default async function POST(req, res) {
  const { email, password } = req.body;

  console.log(req)

  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  console.log("error", error);
  console.log("data", data);
  if (error) return res.status(401).json({ error: error.message });

  const user = data.user
  res.setHeader('Set-Cookie', serialize('userid', user.id))
  return res.status(200).json({ user: user });
}