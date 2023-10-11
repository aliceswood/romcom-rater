'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const supabase = createClientComponentClient();
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

   // onChange functions
    const handleEmailChange = (event) => {
    setEmail(event.target.value)
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      username: username,
      password: password,
    })

    console.log('Submitted:', { email, password, username })

    // visual feedback for user to be added.
  };

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut()
  //   router.refresh()
  // }

  return (
    <>
     <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input 
              type="email"
              value={email}
              onChange={(handleEmailChange)} />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="username"
              name="username"
              onChange={(handleUsernameChange)}
              value={username}
            />
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
            <button onClick={handleSubmit}>Log in</button>
          </div>
        </form>
      </div>
    </>
  )
}
