
import NavBar from '../navbar/NavBar';
import CourseList from '../courselist/courseList';
import styles from './Home.module.css';

function Home({ courses, setCourses, error, setError, onLogout }) {
  return (
    <div className={styles.home}>
      <NavBar courses={courses} setCourses={setCourses} setError={setError} onLogout={onLogout} />
      <main className="content">
        <CourseList courses={courses} setCourses={setCourses} error={error} setError={setError} />
      </main>
    </div>
  );
}

export default Home;
