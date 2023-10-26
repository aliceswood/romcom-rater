import SignUpForm from '../../components/signup/SignUpForm';
import Head from 'next/head';

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
          <li></li>
        </ul>
        <SignUpForm/>
      </> 
    </>
  )
}