import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Romcom Rater!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Go visit  <Link href='/films/first-film'> film 1 page</Link>
        </h1>
        <h1 className={styles.title}>
          Visit your own <Link href='/user-page'>User Page!</Link>
        </h1>
      </main>

      <footer>
      
      </footer>

    </div>
  );
}
