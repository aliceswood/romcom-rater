import SignUpForm from '../../components/signup/SignUpForm';
import Head from 'next/head';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/navbar';

export default function SignUpPage () {

  return (
    <>
      <Head>
        <title>RomCom Rater: Sign Up</title>
      </Head>
      <Background/>
      <Navbar/>
      <SignUpForm/>
    </>
  )
}