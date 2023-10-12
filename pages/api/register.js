import { supabase } from "../../lib/initSupabase";
import { serialize } from 'cookie';
import { z } from "zod";


export const signUpSchema= z.object({
  username: z.string().min(1, 'Please enter a username'),
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 letters'),
  name: z.string().min(1, 'Please enter your name')
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
  const { email, password, name, username } = result.data

  try {
    let { error, data } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
          username: username,
        },
      },
    });
   
    // console.log(" error", error);
    // console.log(" data", data);

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    const user = data.user
    res.setHeader('Set-Cookie', serialize('userid', user.id))
    return res.status(200).json({ user: user });
  } catch (error) {
    console.error("Error during sign-up:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}  
