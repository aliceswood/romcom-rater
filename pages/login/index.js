import LogInForm from '../../components/login/LogInForm';
import Head from 'next/head';


export default function logInPage () {
  return (
    <>
    <Head>
      <title>RomCom Rater: Log In</title>
    </Head>
    <LogInForm/>
    </>
  )
}