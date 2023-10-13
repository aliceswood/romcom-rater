import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function POST(req, res, session) {
    await req.session.destroy();
    res.send({ ok: true });
    console.log(req.session)

  },
  {
    cookieName: 'RomCom Rater Cookie',
    password: process.env.COOKIE_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },

)