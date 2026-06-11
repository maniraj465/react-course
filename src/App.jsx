import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Course from './components/course/Course'
import Footer from './components/footer/Footer'
import reactLogo from './assets/react.svg';
import CourseList from './components/courselist/courseList'

function App() {

  return (
    <>
      <NavBar/>
      <CourseList/>
      <Footer/>
    </>
  )
}

export default App
