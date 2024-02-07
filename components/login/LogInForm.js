import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';



export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({invalid: ''})


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
      try {
      const errorResponse = await res.json();
      console.log('Error', errorResponse.error);

       setValidationError(previousState => ({ 
        ...previousState, 
       invalid: 'Invalid Details',
      }))  
    } catch (error) {
      console.log('Error', res.error);
    }
    router.push('/login');
      // add redirect and error handling for failed sign up
    }
  }
    // visual feedback for user to be added.
  
  const Validation = styled.p`
    color: #d00370;
    font-weight: 600;
  `

  return (
    <>
     <div className="formContainer">
        <h2>Login Form</h2>
        <form onSubmit={handleLogIn}>
          <div>
            <label>Email:</label>
            <input 
              type="email"
              value={email}
              onChange={(handleEmailChange)} 
              data-testid="emailField"
              required={true}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={(handlePasswordChange)}
              value={password}
              data-testid="passwordField"
              required={true}
            />
            <Validation>{validationError?.invalid}</Validation>
          </div>
          <div>
          <button type="submit"data-testid="logInButton">Log in!</button>
          </div>
          <div>
        <Link href="/signup" data-testid="signUpPage" id="signUpPage">Don't have an account yet?</Link>
      </div>
        </form>
      </div>
    </>
  )
  }
