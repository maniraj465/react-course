import PropTypes from 'prop-types';
import styles from './Course.module.css';
import heroLogo from './../../assets/hero.png';

function Course ({
    courseName = 'Default - React - The Complete Guide (incl. Next.js, Redux)',
    courseDescription = 'Default - Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
    coursePrice = 1000.00,
    courseAuthor = 'Default  - Maniraj',
    courseImg = heroLogo,
    rating = 2.5,
    show = true
}) {
    
    if(show) {
        return (
            <div className={styles.card}>
                <div className={styles.courseImg}>
                    <img src={courseImg} alt="Course Logo" />
                </div>
                <div className={styles.courseName}>
                    <h3>{courseName}</h3>
                </div>
                <div className={styles.courseDescription}>
                    {/* <p>{courseDescription.length > 100 ? `${courseDescription.substring(0, 400)}...` : courseDescription}</p>  */}
                    <p>{courseDescription}</p> 
                </div>
                
                <div className={styles.rating}>
                    <p>Rating: {rating}</p>
                    {Array.from({ length: 5 }, (_, index) => {
                        const starNumber = index + 1;
                        
                        const starClass = starNumber <= rating ? styles.filled : styles.empty;
                        
                        return (<span key={index} className={`${styles.star} ${starClass}`}>&#9733;</span>);
                    })}
                </div>
                
                <p>Price: &#x20B9;{coursePrice}</p>
                <p>Author: {courseAuthor}</p>
                <div className={styles.addCart}>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.card}>
                <h3>Course details not available</h3>
            </div>
        );
    }

}

Course.propTypes = {
    courseName: PropTypes.string,
    courseDescription: PropTypes.string,
    coursePrice: PropTypes.number,
    courseAuthor: PropTypes.string,
    courseImg: PropTypes.string,
    rating: PropTypes.number,
    show: PropTypes.bool
};


export default Course;