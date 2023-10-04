import SignUpForm from '../../components/signup/SignUpForm';
import Head from 'next/head';


export default function signUpPage () {
  return (
    <>
    <Head>
      <title>RomCom Rater: Sign Up</title>
    </Head>
    <SignUpForm/>
    </>
  )
}