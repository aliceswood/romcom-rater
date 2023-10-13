import { withIronSessionApiRoute } from "iron-session/next";

const handler = withIronSessionApiRoute(
  async function POST(req, res, session) {
    await req.session.destroy();
    res.send({ ok: true });
  },
  {
    cookieName: 'RomCom Rater Cookie',
    password: process.env.COOKIE_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },

)

export default handler;