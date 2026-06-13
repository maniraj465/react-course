import './App.css'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import { useState } from 'react'
import useFetch from './components/customHooks/useFetch/useFetch';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const [courses, error, setCourses, setError] = useFetch('http://localhost:3000/courses', isLoggedIn);

  const handleLogin = (event) => {
    event.preventDefault();

    if (loginEmail.trim() && loginPassword.trim()) {
      setIsLoggedIn(true);
      setLoginError(null);
      return;
    }

    setLoginError('Please enter both email and password.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginEmail('');
    setLoginPassword('');
    setLoginError(null);
    setCourses(null);
    setError(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="app loginContainer">
        <div className="loginContent">
          <div className="loginCard">
            <h1>Sign in to Tech Courses</h1>
            <form className="loginForm" onSubmit={handleLogin}>
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
            {loginError && <p className="loginError">{loginError}</p>}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app appWithFooter">
      <div className="contentWrapper">
        <Home
          courses={courses}
          setCourses={setCourses}
          error={error}
          setError={setError}
          onLogout={handleLogout}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
