'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   // onChange functions
    const handleEmailChange = (event) => {
    setEmail(event.target.value)
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const handleLogIn = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/auth/login", {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    if (res.status === 200) {
      console.log('User logged in');
      router.push('/userpage')
    } else {
      console.log('Error', res.error);
      // add redirect and error handling for failed sign up
    }
  }
    // visual feedback for user to be added.
  
  return (
    <>
     <div>
        <h2>Login Form</h2>
        <form onSubmit={handleLogIn}>
          <div>
            <label>Email:</label>
            <input 
              type="email"
              value={email}
              onChange={(handleEmailChange)} />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={(handlePasswordChange)}
              value={password}
            />
          </div>
          <div>
          <button type="submit"data-testid="logInButton">Log in</button>
          </div>
        </form>
      </div>
    </>
  )
  }
