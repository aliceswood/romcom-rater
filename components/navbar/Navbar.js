import Link from 'next/link'
import SignOutButton from '../signout/Signout'
import React, { useEffect, useState } from 'react';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('supabase.auth.token')

    if(token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, []);

  return (
    <div className="header">
      <div>
        <p className="title">RomCom Rater</p>
      </div>
      {isLoggedIn ? (
        <ul>
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
        </div>
      )}
    </div>
  )
}

export default Navbar
