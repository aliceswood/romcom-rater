import { supabase } from "../../lib/initSupabase";
import { withIronSessionApiRoute } from "iron-session/next";
import { z } from "zod";


export const signUpSchema= z.object({
  username: z.string().min(1, 'Please enter a username'),
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 letters'),
  name: z.string().min(1, 'Please enter your name')
});


const handler = withIronSessionApiRoute(
  async function POST(req, res) {
    const result = signUpSchema.safeParse(req.body)
    if ( !result.success) {
      const errorDetails = result.error.errors.map(issue => ({
        message: issue.message,
        errorCode: issue.path.join('.')
      }))
      return res.status(401).json({ errorType: 'validation', error: errorDetails });
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
        return res.status(401).json({ errorType: 'general', error: error.message });
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

export default handler;