import SignUpForm from '../../components/signup/SignUpForm';
import Head from 'next/head';
import Link from 'next/link';


export default function SignUpPage () {
  return (
    <>
      <Head>
        <title>RomCom Rater: Sign Up</title>
      </Head>
      <>
        <SignUpForm/>
      </>  
      <div>
        <Link href="/login" data-testid="logInPage" id="logInPage">Already have an account?</Link>
      </div>
    </>
  )
}