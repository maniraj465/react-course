import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../home/Home.module.css';

function NavBar({ courses, setCourses, setError, onLogout }) {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const fetchData = (value) => {
        fetch('http://localhost:3000/courses')
            .then(response => response.json())
            .then(json => { 
                const filteredCourses = json.filter(course => 
                    course.courseName.toLowerCase().includes(value.toLowerCase())
                );
                setCourses(filteredCourses);
                setError(null);
            })
            .catch(error => {
                // console.error('Error fetching courses:', error)
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
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* <img src="src\assets\tech-courses-logo.png" alt="courses logo" /> */}

                <svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#2563eb" />
                    <g transform="translate(0, -10)">
                        <g fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 400,90 C 445,90 485,105 510,125 C 510,195 490,265 400,305 C 310,265 290,195 290,125 C 315,105 355,90 400,90 Z" />
                        <path d="M 325,175 L 370,135 L 415,170 L 475,115" strokeWidth="7" /><path d="M 345,210 L 380,180 L 415,210 L 455,160" strokeWidth="7" /></g>
                        <g fill="#ffffff"><circle cx="325" cy="175" r="7" /><circle cx="370" cy="135" r="7" /><circle cx="415" cy="170" r="7" /><circle cx="475" cy="115" r="7" /><circle cx="345" cy="210" r="7" /><circle cx="380" cy="180" r="7" /><circle cx="415" cy="210" r="7" /><circle cx="455" cy="160" r="7" /></g>
                        <g fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"><polygon points="400,215 435,227 400,239 365,227" fill="#2563eb" strokeWidth="6" /><path d="M 377,232 L 377,248 C 377,255 423,255 423,248 L 423,232" /><path d="M 400,227 L 358,235 L 358,247" strokeWidth="4" /></g>
                    </g>
                        <text x="400" y="375" fontFamily="sans-serif" fontSize="46" fontWeight="800" fill="#ffffff" textAnchor="middle" letterSpacing="4">TECH COURSES</text>
                    </svg>
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
            <button type="button" className={styles.logoutBtn} onClick={() => { onLogout && onLogout(); navigate('/login'); }}>
                Logout
            </button>
        </nav>
    );
}

export default NavBar;