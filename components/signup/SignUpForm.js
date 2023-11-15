import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

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

  // form fields validataion
  function validateName(name) {
    if (name.length == 0) {
      return "Name cannot be empty";
    } else {
      return "";
    }
  }

  function validateEmail(email) {
    if (email.length == 0) {
      return "Email cannot be empty";
    } else {
      return "";
    }
  }

  function validatePassword(password) {
    if (password.length == 0) {
      return "Password cannot be empty";
    } else {
      return "";
    }
  }

  function validateUsername(username) {
    if (username.length == 0) {
      return "Username cannot be empty";
    } else {
      return "";
    }
  }

  function validateForm() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let nameError = validateName(name);
    let emailError = validateEmail(email);
    let usernameError = validateUsername(username);
    let passwordError = validatePassword(password);

    if (nameError) {
      setValidationError(previousState => ({ 
        ...previousState, name: nameError ? nameError : ''}))
      return false;
    } else if (emailError) {
      setValidationError(previousState => ({ 
        ...previousState, email: emailError ? emailError : ''}))
      return false;
    } else if (usernameError) {
      setValidationError(previousState => ({ 
        ...previousState, username: usernameError ? usernameError : ''}))
      return false;
    } else if (passwordError) {
      setValidationError(previousState => ({ 
        ...previousState, password: passwordError ? passwordError : ''}))
      return false;
    } else {
      return true
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (validateForm() === true) {

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
        router.push('/userpage')
      } else {
        try {
          const errorResponse = await res.json();
          if (errorResponse.errorType === 'validation') {
            console.log('Error', errorResponse.error);

            const errorsList = errorResponse.error.fieldErrors

            setValidationError(previousState => ({ 
              ...previousState, 
              password: errorsList.password ? errorsList.password[0] : '',
              name: errorsList.name ? errorsList.name[0] : '',
              username: errorsList.username ? errorsList.username[0] : '',
              email: errorsList.email ? errorsList.email[0] : '',
            }))  
          } else {
            alert(`${errorResponse.error}`)
          }
        } catch (error) {
          console.error('Error parsing error response:', error);
        }
        router.push('/signup');
      }
    }
  }

  const Validation = styled.p`
  color: #d00370;
  font-weight: 600;
`

  return (
    <> 
      <div className="formContainer">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>  
          <div>
          <label>Name:</label> 
            <input 
              name="name" 
              id="name" 
              type="text" 
              value={name} 
              onChange={handleNameChange}
              autoComplete="name"
              data-testid="nameField"
            />
            <Validation>{validationError?.name}</Validation>
          </div>
          <div>
            <label>Email:</label> 
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email} 
              onChange={handleEmailChange}
              data-testid="emailField"
            />
            <Validation>{validationError?.email}</Validation>
          </div>
          <div>
            <label>Username:</label> 
            <input 
              type="text" 
              name="username"
              id="username"  
              value={username} 
              onChange={handleUsernameChange}
              data-testid="usernameField"
            />
            <Validation>{validationError?.username}</Validation>
          </div>
          <div>
            <label>Password:</label> 
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange}
              data-testid="passwordField"
            />
            <Validation>{validationError?.password}</Validation>
          </div>
          <button className="button" type="submit"data-testid="signUpButton">Sign up!</button>
          <div>
            <Link href="/login" data-testid="logInPageLink" id="logInPage">Already have an account?</Link>
          </div>
        </form>
      </div>
    </>
  )
}

