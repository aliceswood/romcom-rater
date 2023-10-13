import Link from 'next/link';
import Image from 'next/image';
import profilePic from './profile.jpg';
import Head from 'next/head';
import styles from './index.module.css';
import utilStyles from '../../styles/utils.module.css';


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
      <header className={styles.header}>
        <>
          <Image
            priority
            src={profilePic}
            className={utilStyles.borderCircle}
            data-testid='Image'
            height={108}
            width={108}
            alt=""
          />
          <h2 className={utilStyles.headingLg}>
              {name}
          </h2>
        </>
      </header>
      <div className={utilStyles.navigationlinks}>
        <Link href="/" data-testid="homeLink" id="homeLink">← Back to home</Link>
      </div>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}

