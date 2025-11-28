import {Link} from 'react-router-dom';
import styles from './Footer.module.css';

export default () => {
    return (<footer className={styles.footer} role="contentinfo">
        <div className={styles.footerContainer}>
            <div className={styles.footerSection}>
                <h3>The Midnight Echoes</h3>
                <p>Indie rock band creating atmospheric soundscapes and unforgettable live experiences.</p>
                <div className={styles.socialLinks}>
                    <a
                        className={styles.socialLink}
                        href="https://facebook.com/midnightechoes"
                        aria-label="Facebook"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        📘
                    </a>
                    <a
                        className={styles.socialLink}
                        href="https://instagram.com/midnightechoes"
                        aria-label="Instagram"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        📷
                    </a>
                    <a
                        className={styles.socialLink}
                        href="https://twitter.com/midnightechoes"
                        aria-label="Twitter"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        🐦
                    </a>
                    <a
                        className={styles.socialLink}
                        href="https://youtube.com/midnightechoes"
                        aria-label="YouTube"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        📺
                    </a>
                    <a
                        className={styles.socialLink}
                        href="https://spotify.com/midnightechoes"
                        aria-label="Spotify"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        🎵
                    </a>
                </div>
            </div>

            <div className={styles.footerSection}>
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/tour">Tour Dates</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className={styles.footerSection}>
                <h3>Music</h3>
                <ul>
                    <li><Link to="/music#discography">Discography</Link></li>
                    <li><Link to="/music#videos">Music Videos</Link></li>
                    <li><Link to="/music#streaming">Streaming Links</Link></li>
                    <li><Link to="/music#lyrics">Lyrics</Link></li>
                </ul>
            </div>

            <div className={styles.footerSection}>
                <h3>Booking & Press</h3>
                <ul>
                    <li><Link to="/contact">Book the Band</Link></li>
                    <li><Link to="/about#press-kit">Press Kit</Link></li>
                    <li><Link to="/contact">Media Inquiries</Link></li>
                    <li><Link to="/tour">Tour Schedule</Link></li>
                </ul>
            </div>
        </div>

        <div className={styles.footerBottom}>
            <p>
                &copy; 2025 The Midnight Echoes. All rights reserved. | Website by{' '}
                <a href="https://yoeltecleab.github.io" target="_blank" rel="noopener noreferrer">
                    Yoel Tecleab
                </a>
            </p>

            <div className={styles.validationLinks}>
                <a
                    href="https://validator.w3.org/check?uri=referer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Valid HTML
                </a>
                <span>|</span>
                <a
                    href="https://jigsaw.w3.org/css-validator/check/referer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Valid CSS
                </a>
            </div>
        </div>
    </footer>);
};