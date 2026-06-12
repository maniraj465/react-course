import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav>
            <div className={styles.logo}>
                <img src="src\assets\tech-courses-logo.png" alt="Logo" />
            </div>
            {/* <div className={styles.title}>
                <a href="#">A batter place to learn</a>
            </div> */}
            
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search courses" />
                <img src ="src\assets\search.png" alt="Search"/>
            </div>
        </nav>
    );
}

export default NavBar;