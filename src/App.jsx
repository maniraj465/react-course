import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import CourseList from './components/courselist/courseList'
import { useState } from 'react'

function App() {
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="app">
      <NavBar courses={courses} setCourses={setCourses} setError={setError} />
      <main className="content">
        <CourseList courses={courses} setCourses={setCourses} error={error} setError={setError} />
      </main>
      <Footer />
    </div>
  )
}

export default App
