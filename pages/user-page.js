import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/user-page.module.css';
import utilStyles from '../styles/utils.module.css';

const  name = 'Alice'
export default function UserPage({children, home}) {
  return (
    <>
    <Head>
      <title>RomCom Rater: User Page</title>
    </Head>
    <header className={styles.header}>
      <>
        <Image
          priority
          src="/images/profile.jpg"
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
    </>
  );
}

