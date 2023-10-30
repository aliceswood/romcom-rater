import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import utilStyles from '../../styles/utils.module.css';
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
       invalid: 'invalid log in credentials',
      }))  
    } catch (error) {
      console.log('Error', res.error);
    }
    router.push('/login');
      // add redirect and error handling for failed sign up
    }
  }
    // visual feedback for user to be added.
  
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
            />
            <p className={utilStyles.validationError}>{validationError?.email}</p>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={(handlePasswordChange)}
              value={password}
              data-testid="passwordField"
            />
            <p className={utilStyles.validationError}>{validationError?.invalid}</p>
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
