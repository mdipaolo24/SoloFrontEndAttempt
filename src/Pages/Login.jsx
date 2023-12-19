
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Back end
    if (username && password) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };
  

  return (
    <div>
      <div className="card">
        {loggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            {/* Additional content for logged-in users */}
          </div>
        ) : (
          <div>
            <h2>Login Page</h2>
            <form>
              <label>
                <h3>Username:<input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                /></h3>
                
              </label>
              <br />
              <h4>Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> </h4>
                

              <br />
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;