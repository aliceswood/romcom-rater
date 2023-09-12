import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function UserPage() {
  return (
    <>
    <Head>
      <title>User Page</title>
    </Head>
      <h1>Welome to your User Page!</h1>
      <Image
        src="/images/profile.jpg" 
        height={100}
        width={80}
        alt="Alice"
      />
      <h2>
        <Link href="/">Back to Homepage</Link>
      </h2>
    </>
  );
}

