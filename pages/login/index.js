import LogInForm from '../../components/login/LogInForm';
import Head from 'next/head';
import Link from 'next/link';


export default function LogInPage () {
  return (
    <>
    <Head>
      <title>RomCom Rater: Log In</title>
    </Head>
    <LogInForm/>
      <div>
        <Link href="/signup" data-testid="signUpPage" id="signUpPage">Don't have an account yet?</Link>
      </div>
    </>
  )
}