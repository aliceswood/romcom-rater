import { useState } from 'react';

export default function LogInForm ({}) {

  return (
    <> 
      <p>Log in here:</p>
      <form>   
        <input 
        placeholder="Email address" 
        type="text"
        data-testid="emailField"
        />
        <input 
        placeholder="Username" 
        type="text"
        data-testid="usernameField"
        />
        <input 
        placeholder="Password" 
        type="password"
        data-testid="passwordField"
        />
        <button type="submit" data-testid="logInButton">Log in!</button>
      </form>
    </>
  )
}
