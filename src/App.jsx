import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Course from './components/course/Course'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Course/>
      <Footer/>
    </>
  )
}

export default App
