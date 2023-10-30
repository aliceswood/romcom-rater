import LogInForm from '../../components/login/LogInForm';
import Head from 'next/head';
import Background from '../../components/background/background';

export default function LogInPage () {
  return (
    <>
    <Head>
      <title>RomCom Rater: Log In</title>
    </Head>
    <LogInForm/>
    <Background/>
    </>
  )
}