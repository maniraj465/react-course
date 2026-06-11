import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import CourseList from './components/courselist/courseList'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="content">
        <CourseList />
      </main>
      <Footer />
    </div>
  )
}

export default App
