import Link from "next/link";
import SignOutButton from "../signout/Signout";

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
    <div className="header">
      <div>
        <p className="title">RomCom Rater</p>
      </div>
      {session?.user ? (
        <ul>
          <button
            className="buttons"
            onClick={() => {handleSignOut}}
          >
            Logout
          </button>
          <SignOutButton />
        </ul>
      ) : (
        <div className="navButtonsWrapper">
          <Link href="/login">
            <p className="buttons">Login</p>
          </Link>
          <Link href="/signup">
            <p className="buttons">Signup</p>
          </Link>
          <SignOutButton />
        </div>
      )}
    </div>
  );
};

export default Navbar;