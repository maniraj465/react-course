import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Course from './components/course/Course'
import Footer from './components/footer/Footer'
import reactLogo from './assets/react.svg';
import CourseList from './components/courselist/courseList'

function App() {
  const [count, setCount] = useState(0)

  const courseName = 'React - The Complete Guide (incl. Next.js, Redux)';
  const courseDescription = 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!';
  const coursePrice = 629.00;
  const courseAuthor = 'Maniraj';
  const rating = 2.5;

  return (
    <>
      <NavBar/>
      <CourseList/>
      
      {/* <Course
        courseName = "React - The Complete Guide (incl. Next.js, Redux)"
        courseDescription = "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!"
        coursePrice = {629.00}
        courseAuthor = "Maniraj"
        rating = {3.8}
        show = {true}
      />

      <Course
        courseName = "React - The Complete Guide (incl. Next.js, Redux)"
        courseDescription = "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!"
        coursePrice = {629.00}
        courseAuthor = "Maniraj"
        courseImg = {reactLogo}
        rating = {4.6}
        show = {true}
      />

      <Course
        courseName = "React - The Complete Guide (incl. Next.js, Redux)"
        courseDescription = "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!"
        coursePrice = {629.00}
        courseAuthor = "Maniraj"
        courseImg = {reactLogo}
        rating = {4.6}
        show = {false}
      /> */}
      
      <Footer/>
    </>
  )
}

export default App
