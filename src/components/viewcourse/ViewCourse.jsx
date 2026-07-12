import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './ViewCourse.module.css';
import heroLogo from '../../assets/hero.png';

function ViewCourse() {
    
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);

    function likeCourse() {
        setCourse({ ...course, liked: !course.liked });
    }

    function AddToCart(event, courseName) {
        // console.log(event);
        setAddedToCart(!addedToCart);
        // console.log(addedToCart);
    }

    useEffect(() => {
        if (!course) {
            fetch('http://localhost:3000/courses/' + id)
            .then(response => {console.log(response); return response.json(); })
            .then(data => setCourse(data))
            .catch(error => {
                console.error('Error fetching courses:', error)
                setError('Failed to fetch courses. Please try again later.');
            });
        }
        console.log(course);
    }, []);
        
    if(course && course.show) {
        return (
            <div className={styles.viewCourseContainer}>
                <div className={styles.viewCourseCard}>
                    <div className={styles.courseImg}>
                        <img src={course.courseImg ? course.courseImg : heroLogo} alt="Course Logo" />
                    </div>
                    <div className={styles.courseName}>
                        <h3>{course.courseName}</h3>
                    </div>
                    <div className={styles.courseDescription}>
                        {/* <p>{course.courseDescription.length > 100 ? `${course.courseDescription.substring(0, 500)}...` : course.courseDescription}</p>  */}
                        <p>{course.courseDescription}</p>
                    </div>
                    
                    <div className={styles.rating}>
                        <p>Rating: {course.rating}</p>
                        {Array.from({ length: 5 }, (_, index) => {
                            const starNumber = index + 1;
                            
                            const starClass = starNumber <= course.rating ? styles.filled : styles.empty;
                            
                            return (<span key={index} className={`${styles.star} ${starClass}`}>&#9733;</span>);
                        })}
                    </div>
                    <div className={styles.coursePrice}>
                        {course.discountPercentage > 0 
                            ? <><p className={styles.discountPrice}>Price: &#x20B9;<strike>{course.coursePrice}</strike> &#x20B9;{Math.round(course.coursePrice - (course.coursePrice * course.discountPercentage / 100))} - {course.discountPercentage}% off</p></> 
                            : <p>Price: &#x20B9;{course.coursePrice}</p>}
                    </div>
                    <div className={styles.courseAuthor}>
                        <p>Author: {course.courseAuthor}</p>
                    </div>
                    <div className={addedToCart ? styles.addedToCart : styles.addCart}>
                        {course.liked 
                            ? <div className={styles.likeCourse} onClick={() => likeCourse(course.id)}><span className={styles.heart}>&#x2764;</span></div>
                            : <div className={styles.likeCourse} onClick={() => likeCourse(course.id)}><span className={styles.heartOutlin}>&#x2764;</span></div>
                        }
                        <button onClick={(event) => AddToCart(event, course.courseName)}>{addedToCart ? "Added to cart" : "Add to cart"}</button>
                        
                    </div>
                    
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.viewCourseCard}>
                <h3>Course details not available</h3>
            </div>
        );
    }
}

export default ViewCourse;