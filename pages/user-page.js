import Link from 'next/link';

export default function UserPage() {
  return (
    <>
      <h1>Welome to your User Page!</h1>
      <h2>
        <Link href="/">Back to Homepage</Link>
      </h2>
    </>
  );
}