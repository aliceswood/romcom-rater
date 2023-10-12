import { useState } from 'react';
import { useRouter } from 'next/router';
import utilStyles from '../../styles/utils.module.css';

export default function SignUpForm ({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({username: '', email: '', name: '', password: ''})
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

  const handleSubmit = async (event) => {
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
      try {
        const errorResponse = await res.json();
        console.log('Error', errorResponse.error);

        const errorsList = errorResponse.error.fieldErrors

        setValidationError(previousState => ({ 
          ...previousState, 
          password: errorsList.password[0],
          name: errorsList.name[0],
          username: errorsList.username[0],
          email: errorsList.email[0],
        }))  
            
      } catch (error) {
        console.error('Error parsing error response:', error);
      }
      router.push('/signup');
    }
  }

  return (
    <> 
      <div>
        <h2>Sign Up Form</h2>
        <form onSubmit={handleSubmit}>  
          <div>
          <label>Name:</label> 
            <input 
              name="name" 
              type="text" 
              value={name} 
              onChange={handleNameChange}
              autoComplete="name"
              data-testid="nameField"
            />
            <p className={utilStyles.validationError}>{validationError?.name}</p>
          </div>
          <div>
            <label>Email:</label> 
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={handleEmailChange}
              data-testid="emailField"
            />
            <p className={utilStyles.validationError}>{validationError?.email}</p>
          </div>
          <div>
            <label>Username:</label> 
            <input 
              type="text" 
              name="username" 
              value={username} 
              onChange={handleUsernameChange}
              data-testid="usernameField"
            />
            <p className={utilStyles.validationError}>{validationError?.username}</p>
          </div>
          <div>
            <label>Password:</label> 
            <input 
              type="password" 
              name="password" 
              value={password} 
              onChange={handlePasswordChange}
              data-testid="passwordField"
            />
            <p className={utilStyles.validationError}>{validationError?.password}</p>
          </div>
          <button type="submit"data-testid="signUpButton">Sign up!</button>
        </form>
      </div>
    </>
  )
}

