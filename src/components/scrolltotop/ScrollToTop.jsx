import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down past 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the listener when component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // The smooth scroll logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This handles the animation natively!
    });
  };

  return (
    <>
      {isVisible && (
        <button className={styles.scrollTopBtn} onClick={scrollToTop}>
          &#x2191;
        </button>
      )}
    </>
  );
}

export default ScrollToTop;