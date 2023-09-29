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
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </>
  );
}

