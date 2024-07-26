import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth/signout', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        localStorage.removeItem('supabase.auth.token');
        
        localStorage.removeItem('sb-hrnjitgsslglkhtbilaf-auth-token');


        router.push('/login');
      } else {
        console.error('Sign-out failed');
      }
    } catch (error) {
      console.error('Sign-out error:', error.message);
    }
  };

  return (
    <button
      className="buttons"
      onClick={handleSignOut} 
    >
      Logout
    </button>
  );
};

export default SignOutButton;
