import './App.css'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import { useState } from 'react'
import useFetch from './components/customHooks/useFetch/useFetch';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [courses, error, setCourses, setError] = useFetch('http://localhost:3000/courses', isLoggedIn);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCourses(null);
    setError(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="app">
        <Auth onLoginSuccess={handleLoginSuccess} />
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
