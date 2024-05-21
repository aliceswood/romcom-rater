import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

	// onChange functions
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLogIn = async (event) => {
		event.preventDefault();

		try {
			const { data: authData , error: authError  } = await supabase.auth.signInWithPassword({
				email,
				password,
			});
			if (authError) {
				console.error("Login error:", authError.message);
				setValidationError({ invalid: "Invalid email or password" });
			} else if (authData.user) {
				// Ensure user object exists

				const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
					access_token: authData.session.access_token,
					refresh_token: authData.session.refresh_token,
				});
				// console.log("User logged in:", authData.session.user);
				router.push("/userpage");
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
