import { supabase } from "../../lib/initSupabase";
import { serialize } from 'cookie';


export default async function POST(req, res) {
  const { email, password, name, username } = req.body;

  try{
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
   
    console.log(" error", error);
    console.log(" data", data);

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
