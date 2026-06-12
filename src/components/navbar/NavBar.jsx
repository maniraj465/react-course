import { useState } from 'react';

import styles from './NavBar.module.css';

function NavBar() {
const [searchText, setSearchText] = useState('');

    const [courses, setCourses] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = (value) => {
        fetch('http://localhost:3000/courses')
            .then(response => response.json())
            .then(json => { 
                const filteredCourses = json.filter(course => 
                    course.courseName.toLowerCase().includes(value.toLowerCase())
                );
                setCourses(filteredCourses);
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
                <button>&#128269;</button>
            </div>
        </nav>
    );
}

export default NavBar;