import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = ({ session }) => {

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
    <div className={styles.container}>
      <div>
        <p className={styles.title}>RomCom Rater</p>
      </div>
      {session?.user ? (
        <ul className={styles.navContent}>
          <Link href="/">
            <li className={styles.name}>Home</li>
          </Link>
          <button
            className={styles.buttons}
            onClick={() => {handleSignOut}}
          >
            Logout
          </button>
        </ul>
      ) : (
        <div className={styles.navContent}>
          <Link href="/login">
            <p className={styles.buttons}>Login</p>
          </Link>
          <Link href="/signup">
            <p className={styles.buttons}>Signup</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;