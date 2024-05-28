import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
import Background from "../../components/background/Background";
import { supabase } from "../../lib/initSupabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function UserPage() {
	const [user, setUser] = useState(null);
	const [name, setName] = useState("");

	const router = useRouter();

	useEffect(() => {
		async function fetchUser() {
			const {
				data: { session },
			} = await supabase.auth.getSession();

			if (session) {
				try {
					const {
						data: { user },
						error,
					} = await supabase.auth.getUser();
					if (error) {
						console.error("Error fetching user:", error.message);
					} else {
						setUser(user);
						console.log("User fetched:", user);
						setName(user.user_metadata.name);
					}
				} catch (err) {
					console.error("Unexpected error fetching user:", err.message);
				}
			} else {
				console.log("No active session found.");
			}
		}
		fetchUser();
	}, []);

	const handleSignOut = async (event) => {
		event.preventDefault();

		await fetch("/api/auth/signout", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		router.push("/login");
	};

	return (
		<>
			<Head>
				<title>RomCom Rater: User Page</title>
			</Head>
			<>
				<Background />
				<Navbar />
				<UserCard>
					{user ? (
						<div key={user.id}>
							<h2>{name}</h2>
						</div>
					) : (
						<p>No user found.</p>
					)}
					<div>fun things here</div>
				</UserCard>
			</>
			<div>
				<Link href="/" data-testid="homeLink" id="homeLink">
					← Back to home
				</Link>
			</div>
			<button onClick={handleSignOut}>Sign out</button>
		</>
	);
}

const UserCard = styled.div`
	padding: 30px;
	background-color: rgb(255 255 255 / 20%);
	backdrop-filter: blur(6px);
	max-width: 25%;
	margin: auto;
	border-radius: 0.4rem;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
