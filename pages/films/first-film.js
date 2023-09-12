import Link from 'next/link';

export default function FirstFilm () {
  return (
    <>
      <h1>First Film!</h1>
      <h2>
        <Link href="/">Back to Homepage</Link>
      </h2>
    </>
  );
}