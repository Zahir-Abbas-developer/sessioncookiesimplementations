import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Simulating successful login
    const userData = { username, isLoggedIn: true };

    // Set session cookie
    Cookies.set('userSession', JSON.stringify(userData));


    // Redirect to protected page
    window.location.href = '/dashboard';
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type='submit' onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
