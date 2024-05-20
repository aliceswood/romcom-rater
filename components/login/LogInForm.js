import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { supabase } from '../../lib/initSupabase';

const Validation = styled.p`
    color: #d00370;
    font-weight: 600;
  `

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

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error('Login error:', error.message);
        setValidationError({ invalid: 'Invalid email or password' });
      } else {
        console.log('User logged in:', user);
        router.push('/userpage');
      }
    } catch (error) {
      console.error('Unexpected error during login:', error.message);
      setValidationError({ invalid: 'Unexpected error occurred' });
    }
  };
  
  
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
