import Course from '../course/Course';
import ScrollToTop from '../scrolltotop/ScrollToTop';
import styles from '../home/Home.module.css';
import { useEffect } from 'react';

function CourseList ({ courses, setCourses, error, setError }) {
    
    // useEffect(() => {
    //     if (!courses) {
    //         setTimeout(() => {
    //             fetch('http://localhost:3000/courses')
    //             .then(response => {console.log(response); return response.json(); })
    //             .then(data => setCourses(data))
    //             .catch(error => {
    //                 console.error('Error fetching courses:', error)
    //                 setError('Failed to fetch courses. Please try again later.');
    //             });
    //         }, 1000);        
    //     }
    // }, []);

    
    if (!courses) {
        return (
            <>  
                {!error &&
                    <div className={styles['fullscreen-container']}>
                        <div className={styles.loading}>
                            <img src="src\assets\loading.gif" alt="Loading..." />
                        </div>
                    </div>
                }
                {error && <p>{error}</p>}
            </>
        );
    }

    function handleHideCourse(courseId) {
        // console.log("Hiding course with id:", courseId);
        setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
    }

    function handleLikeCourse(courseId) {
        setCourses(prevCourses => 
            prevCourses.map(course => 
                course.id === courseId 
                    ? { ...course, liked: !course.liked } 
                    : course
            )
        );
    }

    const courseList = courses.map(
        (course) => <Course 
            key = {course.id}
            courseName = {course.courseName}
            courseDescription = {course.courseDescription}
            coursePrice = {course.coursePrice}
            courseAuthor = {course.courseAuthor}
            courseImg = {course.courseImg}
            rating = {course.rating}
            show = {course.show}
            discountPercentage = {course.discountPercentage}
            id = {course.id}
            liked = {course.liked}
            hideCourse = {handleHideCourse}
            likeCourse = {handleLikeCourse}
        />
    );

    return (
        <div className = {styles.cardContainer}>
            {courseList}
        </div>
    );
}

export default CourseList;