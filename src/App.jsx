import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import CourseList from './components/courselist/courseList'
import { useState } from 'react'
import useFetch from './components/customHooks/useFetch/useFetch';

function App() {
  // const [courses, setCourses] = useState(null);
  // const [error, setError] = useState(null);
  const [ courses, error, setCourses, setError ] = useFetch('http://localhost:3000/courses');

  // console.log("courses:", courses);
  // console.log("error:", error);

  return (
    <div className="app">
      <NavBar courses={courses} setCourses={setCourses} setError={setError} />
      <main className="content">
        <CourseList courses={courses} setCourses={setCourses} error={error} setError={setError} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
