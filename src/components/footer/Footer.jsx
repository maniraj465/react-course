import styles from './Footer.module.css';

function Footer () {
    return (
        <footer>
            <div className={styles.footer}>
                <p>Copyright &copy; 2026 Maniraj Sivasubbu. Made with<span className={styles.heart}>&#x2764;</span> in India.</p>
            </div>
        </footer>
    );
}

export default Footer;