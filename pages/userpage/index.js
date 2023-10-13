import Link from 'next/link';
import Image from 'next/image';
import profilePic from './profile.jpg';
import Head from 'next/head';
import styles from './index.module.css';
import utilStyles from '../../styles/utils.module.css';
import { supabase } from '../../lib/initSupabase';

const  name = 'Alice'
export default function UserPage({children, home}) {

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
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

