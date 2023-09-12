import Link from 'next/link';
import Head from 'next/head';

export default function FirstFilm () {
  return (
    <>
      <Head>
        <title>First Film</title>
      </Head>
      <h1>First Film!</h1>
      <h2>
        <Link href="/">Back to Homepage</Link>
      </h2>
    </>
  );
}