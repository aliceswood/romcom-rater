import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/navbar/navbar';
import Background from '../../components/background/Background';
import { useRouter } from 'next/router'


const name = 'Alice'
export default function UserPage({children, home}) {

  const handleSignOut = async (event) => {
    event.preventDefault();


    await fetch('/api/auth/signout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    router.push('/login')
  }

  return (
    <>
      <Head>
        <title>RomCom Rater: User Page</title>
      </Head>
        <>
      <Background/>
        <Navbar/>
          <h2>
              {name}
          </h2>
        </>
      <div>
        <Link href="/" data-testid="homeLink" id="homeLink">← Back to home</Link>
      </div>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}

