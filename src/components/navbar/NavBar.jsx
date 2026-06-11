import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav>
            <div className={styles.logo}>
                <img src="src\assets\tech-courses-logo.png" alt="Logo" />
            </div>
            <div className={styles.title}>
                <p>A place to learn</p>
            </div>
            
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search courses" />
                <button>Search</button>
            </div>
        </nav>
    );
}

export default NavBar;