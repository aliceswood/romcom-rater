import { supabase } from "../../../lib/initSupabase";
import { z } from "zod";
import { withIronSessionApiRoute } from "iron-session/next";


export const signUpSchema= z.object({
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 letters'),
});

export default withIronSessionApiRoute(
  async function POST(req, res) {
    const result = signUpSchema.safeParse(req.body)
    if ( !result.success) {
      const errorDetails = result.error.errors.map(issue => ({
        message: issue.message,
        errorCode: issue.path.join('.')
      }))
      return res.status(401).json({ error: errorDetails });
    }

    const { email, password } = result.data

    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      // console.log("error", error);
      // console.log("data", data);

      if (error) {
        return res.status(401).json({ error: error.message });
      } 

      const user = data.user

      req.session.user = {
        id: user.id,
        admin: true,
      };      
      await req.session.save();
      return res.status(200).json({ user: user });

    } catch (error) {
      console.error("Error during sign-up:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },  
  {
    cookieName: 'RomCom Rater Cookie',
    password: process.env.COOKIE_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    }
  }
)