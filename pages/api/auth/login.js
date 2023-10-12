import { supabase } from "../../../lib/initSupabase";
import { serialize } from 'cookie';
import { z } from "zod";

export const signUpSchema= z.object({
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 letters'),
});


export default async function POST(req, res) {
  const result = signUpSchema.safeParse(req.body)
  if ( !result.success) {
    result.error.errors.map(issue => ({
      message: issue.message,
      errorCode: issue.path.join('.')
    }))
    return res.status(401).json({ error: result.error.flatten() });
  }
  const { email, password } = result.data

  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    console.log("error", error);
    console.log("data", data);

    if (error) {
      return res.status(401).json({ error: error.message });
    } else if (res.status === 400) {
      return 
    }

    const user = data.user
    res.setHeader('Set-Cookie', serialize('userid', user.id))
    return res.status(200).json({ user: user });

  } catch (error) {
    console.error("Error during sign-up:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}  
