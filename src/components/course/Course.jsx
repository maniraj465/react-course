import PropTypes from 'prop-types';
import styles from './Course.module.css';
import heroLogo from './../../assets/hero.png';

import { useEffect, useState } from 'react';

function Course (props) {
    
    const [addedToCart, setAddedToCart] = useState(false);

    function AddToCart(event, courseName) {
        // console.log(event);
        setAddedToCart(!addedToCart);
        // console.log(addedToCart);
    }

    if(props.show) {
        return (
            <div className={styles.card}>
                <div className={styles.courseImg}>
                    <img src={props.courseImg ? props.courseImg : heroLogo} alt="Course Logo" />
                </div>
                <div className={styles.courseName}>
                    <h3>{props.courseName}</h3>
                </div>
                <div className={styles.courseDescription}>
                    <p>{props.courseDescription.length > 100 ? `${props.courseDescription.substring(0, 500)}...` : props.courseDescription}</p> 
                    {/* <p>{courseDescription}</p>  */}
                </div>
                
                <div className={styles.rating}>
                    <p>Rating: {props.rating}</p>
                    {Array.from({ length: 5 }, (_, index) => {
                        const starNumber = index + 1;
                        
                        const starClass = starNumber <= props.rating ? styles.filled : styles.empty;
                        
                        return (<span key={index} className={`${styles.star} ${starClass}`}>&#9733;</span>);
                    })}
                </div>
                <div className={styles.coursePrice}>
                    {props.discountPercentage > 0 
                        ? <><p className={styles.discountPrice}>Price: &#x20B9;<strike>{props.coursePrice}</strike> &#x20B9;{Math.round(props.coursePrice - (props.coursePrice * props.discountPercentage / 100))} - {props.discountPercentage}% off</p></> 
                        : <p>Price: &#x20B9;{props.coursePrice}</p>}
                </div>
                <div className={styles.courseAuthor}>
                    <p>Author: {props.courseAuthor}</p>
                </div>
                <div className={addedToCart ? styles.addedToCart : styles.addCart}>
                    <div className={styles.hideCourse} onClick={() => props.hideCourse(props.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                        </svg>
                    </div>
                    {props.liked 
                        ? <div className={styles.likeCourse} onClick={() => props.likeCourse(props.id)}><span className={styles.heart}>&#x2764;</span></div>
                        : <div className={styles.likeCourse} onClick={() => props.likeCourse(props.id)}><span className={styles.heartOutlin}>&#x2764;</span></div>
                    }
                    <button onClick={(event) => AddToCart(event, props.courseName)}>{addedToCart ? "Added to cart" : "Add to cart"}</button>
                    
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
    key: PropTypes.number,
    courseName: PropTypes.string,
    courseDescription: PropTypes.string,
    coursePrice: PropTypes.number,
    courseAuthor: PropTypes.string,
    courseImg: PropTypes.string,
    rating: PropTypes.number,
    show: PropTypes.bool,
    discountPercentage: PropTypes.number,
    id: PropTypes.number,
    liked: PropTypes.bool,
    hideCourse: PropTypes.func,
    likeCourse: PropTypes.func,

};


export default Course;