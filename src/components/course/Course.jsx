import styles from './Course.module.css';

const courseName = 'React - The Complete Guide (incl. Next.js, Redux)';
const courseDescription = 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!';
const coursePrice = 629.00;
const courseAuthor = 'Maniraj';


function Course () {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeading}>
                <div className={styles.cardHeadingLeft}>
                    <img src="/src/assets/react.svg" alt="React Logo" />
                </div>
                <div className={styles.cardHeadingRight}>
                    <p>{courseName}</p> 
                </div>
            </div>

            <div>
                <div className={styles.cardLeft}>
                    <p>Description: </p>
                </div>
                <div className={styles.cardRight}>
                    <p>{courseDescription}</p> 
                </div>
            </div>
            <div>
                <div className={styles.cardLeft}>
                    <p>Price: </p>
                </div>
                <div className={styles.cardRight}>
                    <p>&#x20B9; {coursePrice}</p> 
                </div>
            </div>
            <div>
                <div className={styles.cardLeft}>
                    <p>Author: </p>
                </div>
                <div className={styles.cardRight}>
                    <p>{courseAuthor}</p> 
                </div>             
            </div>
            
        </div>
    );
}

export default Course;