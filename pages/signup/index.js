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
          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <SignUpForm/>
          <div>
            <Link href="/login" data-testid="logInPageLink" id="logInPage">Already have an account?</Link>
          </div>
        </> 
    </>
  )
}