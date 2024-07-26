import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { supabase } from "../../lib/initSupabase";

const Validation = styled.p`
  color: #d00370;
  font-weight: 600;
`;

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({ invalid: "" });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogIn = async (event) => {
    event.preventDefault();

    try {
      const { data , error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        setValidationError({ invalid: "Invalid email or password" });
        return;
      }

      if (data && data.session) {
        console.log("Auth Data:", data);

        // Check if session data is stored in local storage
        const storedSession =     localStorage.setItem('supabase.auth.token', data.session.access_token);

        console.log("User logged in:", data.session.user);
        console.log("Session:", data.session);

        router.push("/userpage");
      } else {
        console.error("No session data returned:", data);
        setValidationError({ invalid: "No session data returned" });
      }
    } catch (error) {
      console.error("Unexpected error during login:", error.message);
      setValidationError({ invalid: "Unexpected error occurred" });
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
              onChange={handleEmailChange}
              data-testid="emailField"
              required={true}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={handlePasswordChange}
              value={password}
              data-testid="passwordField"
              required={true}
            />
            <Validation>{validationError?.invalid}</Validation>
          </div>
          <div>
            <button type="submit" data-testid="logInButton">
              Log in!
            </button>
          </div>
          <div>
            <Link href="/signup" data-testid="signUpPage" id="signUpPage">
              Don't have an account yet?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
