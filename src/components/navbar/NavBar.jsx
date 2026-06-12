import { useState } from 'react';
import styles from './NavBar.module.css';

function NavBar({ courses, setCourses, setError }) {
    const [searchText, setSearchText] = useState('');

    const fetchData = (value) => {
        fetch('http://localhost:3000/courses')
            .then(response => response.json())
            .then(json => { 
                const filteredCourses = json.filter(course => 
                    course.courseName.toLowerCase().includes(value.toLowerCase())
                );
                setCourses(filteredCourses);
                setError(null);
                console.log(filteredCourses);
            })
            .catch(error => {
                console.error('Error fetching courses:', error)
                setError('Failed to fetch courses. Please try again later.');
            });
    }

    const handleChange = (value) => {
        setSearchText(value);
        fetchData(value);
    }

    const handleClear = () => {
        setSearchText('');
        fetchData('');
    }

    return (
        <nav>
            <div className={styles.logo}>
                <img src="src\assets\tech-courses-logo.png" alt="Logo" />
            </div>
            {/* <div className={styles.title}>
                <a href="#">A batter place to learn</a>
            </div> */}
            
            <div className={styles.searchContainer}>
                <input type="text" value={searchText}
                 onChange={(event => handleChange(event.target.value))} placeholder="Search courses" />
                {searchText && <button className={styles.clearBtn} onClick={handleClear}>✕</button>}
                <button className={styles.searchBtn}>&#128269;</button>
            </div>
        </nav>
    );
}

export default NavBar;