import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './Header.module.css';

export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (<header className={styles.header} role="banner">
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}>🎵</div>
                <h1>The Midnight Echoes</h1>
            </div>

            <button
                className={styles.menuToggle}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            <nav
                className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}
                aria-label="Main navigation"
                role="navigation"
            >
                <Link
                    to="/"
                    className={isActive('/') ? styles.activeLink : ''}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={isActive('/about') ? styles.activeLink : ''}
                    onClick={() => setIsMenuOpen(false)}
                >
                    About
                </Link>
                <Link
                    to="/music"
                    className={isActive('/music') ? styles.activeLink : ''}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Music
                </Link>
                <Link
                    to="/tour"
                    className={isActive('/tour') ? styles.activeLink : ''}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Tour
                </Link>
                <Link
                    to="/contact"
                    className={isActive('/contact') ? styles.activeLink : ''}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </Link>
            </nav>
        </div>
    </header>);
};