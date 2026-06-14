import './App.css'
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { Routes, Route, Navigate } from 'react-router-dom'
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

  return (
    <div className="app appWithFooter">
      <div className="contentWrapper">
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Auth onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isLoggedIn}>
                <Home
                  courses={courses}
                  setCourses={setCourses}
                  error={error}
                  setError={setError}
                  onLogout={handleLogout}
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={isLoggedIn ? '/' : '/login'} replace />} />
        </Routes>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
