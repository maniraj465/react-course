import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

function Auth({ onLoginSuccess }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (loginEmail.trim() && loginPassword.trim()) {
      setLoginError(null);
      onLoginSuccess();
      navigate('/');
      return;
    }

    setLoginError('Please enter both email and password.');
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authContent}>
        <div className={styles.authCard}>
          <h1 className={styles.authTitle}>Sign in to Tech Courses</h1>
          <form className={styles.authForm} onSubmit={handleLogin}>
            <label>
              Email
              <input
                type="email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                placeholder="Enter your password"
              />
            </label>
            <button type="submit">Log in</button>
          </form>
          {loginError && <p className={styles.authError}>{loginError}</p>}
        </div>
      </div>
    </div>
  );
}

export default Auth;
