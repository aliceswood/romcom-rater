import Link from 'next/link';
import Image from 'next/image';

export default function UserPage() {
  return (
    <>
      <h1>Welome to your User Page!</h1>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={100} // Desired size with correct aspect ratio
        width={80} // Desired size with correct aspect ratio
        alt="Alice"
      />
      <h2>
        <Link href="/">Back to Homepage</Link>
      </h2>
    </>
  );
}

