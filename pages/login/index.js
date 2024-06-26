import LogInForm from '../../components/login/LogInForm';
import Head from 'next/head';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/navbar';

export default function LogInPage () {
  return (
    <>
    <Head>
      <title>RomCom Rater: Log In</title>
    </Head>
    <Background/>
    <Navbar/>
    <LogInForm/>
    </>
  )
}