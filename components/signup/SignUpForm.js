import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUpForm ({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // onChange functions
  const handleNameChange = (event) => {
    setName(event.target.value)
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    if (res.status === 200) {
      console.log('User signed up');
      router.push('/login')
    } else {
      console.log('Error', error);
      // add redirect and error printing for sign up
    }
  }

  return (
    <> 
      <form onSubmit={registerUser}>   
        <input 
        placeholder="Name" 
        name="name" 
        type="text" 
        value={name} 
        onChange={handleNameChange}
        autoComplete="name"
        data-testid="nameField"
        />
        <input 
        placeholder="Email address" 
        type="email" 
        name="email" 
        value={email} 
        onChange={handleEmailChange}
        data-testid="emailField"
        />
        <input 
        placeholder="Username" 
        type="text" 
        name="username" 
        value={username} 
        onChange={handleUsernameChange}
        data-testid="usernameField"
        />
        <input 
        placeholder="Password" 
        type="password" 
        name="password" 
        value={password} 
        onChange={handlePasswordChange}
        data-testid="passwordField"
        />
        <button type="submit"data-testid="signUpButton">Sign up!</button>
      </form>
    </>
  )
}

