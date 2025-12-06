import {useState} from 'react';
import {Link} from 'react-router-dom';
import music_video from '../assets/images/music-video.jpg';
import album_release from '../assets/images/album-release.jpg';
import tour_announcement from '../assets/images/tour-announcement.jpg';

export default () => {
    const [email, setEmail] = useState('');
    const [notification, setNotification] = useState(null);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setNotification({message: 'Thank you for subscribing!', type: 'success'});
            setEmail('');
            setTimeout(() => setNotification(null), 3000);
        } else {
            setNotification({message: 'Please enter a valid email address', type: 'error'});
            setTimeout(() => setNotification(null), 3000);
        }
    };

    return (<>
        {/* Hero Section */}
        <section className="hero">
            <div className="hero-content">
                <h1>The Midnight Echoes</h1>
                <p>Atmospheric indie rock that stays with you long after the last note fades</p>
                <div className="hero-buttons">
                    <Link to="/music" className="btn btn-primary">Listen Now</Link>
                    <Link to="/tour" className="btn btn-secondary">See Tour Dates</Link>
                </div>
            </div>
        </section>

        {/* Latest News Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Latest News</h2>
                <p className="section-subtitle">Stay updated with what we're up to</p>
            </div>

            <div className="cards-grid">
                <article className="card">
                    <img
                        src={album_release}
                        alt="New album Shadows & Light"
                        className="card-image"
                    />
                    <h3 className="card-title">New Album: "Shadows & Light"</h3>
                    <p className="card-text">
                        Our highly anticipated third studio album is dropping next month! Pre-order now and get
                        exclusive access to behind-the-scenes content.
                    </p>
                    <Link to="/music" className="btn btn-primary">Learn More</Link>
                </article>

                <article className="card">
                    <img
                        src={tour_announcement}
                        alt="Summer tour dates"
                        className="card-image"
                    />
                    <h3 className="card-title">Summer Tour 2025</h3>
                    <p className="card-text">
                        We're hitting the road! Check out our summer tour schedule and grab your tickets before they
                        sell out.
                    </p>
                    <Link to="/tour" className="btn btn-primary">View Dates</Link>
                </article>

                <article className="card">
                    <img
                        src={music_video}
                        alt="New music video"
                        className="card-image"
                    />
                    <h3 className="card-title">New Music Video Out Now</h3>
                    <p className="card-text">
                        Watch our latest music video for "Echoes in the Dark" - a cinematic journey through sound
                        and visuals.
                    </p>
                    <Link to="/music#videos" className="btn btn-primary">Watch Now</Link>
                </article>
            </div>
        </section>

        {/* Featured Content Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Featured Track</h2>
                <p className="section-subtitle">Listen to our latest single</p>
            </div>

            <div className="card text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
                <h3 className="card-title">Echoes in the Dark</h3>
                <p className="card-text">
                    Our newest single showcases our signature atmospheric sound with haunting melodies and powerful
                    lyrics.
                </p>

                <div style={{
                    background: 'rgba(99, 102, 241, 0.1)', padding: '2rem', borderRadius: '12px', margin: '1.5rem 0'
                }}>
                    <p style={{color: 'var(--text-muted)'}}>🎵 Audio Player (Spotify/SoundCloud embed will go
                        here)</p>
                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem'}}>
                        Listen on:
                        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"
                           style={{margin: '0 0.5rem'}}>Spotify</a> |
                        <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer"
                           style={{margin: '0 0.5rem'}}>Apple Music</a> |
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                           style={{margin: '0 0.5rem'}}>YouTube</a>
                    </p>
                </div>

                <Link to="/music" className="btn btn-secondary">Explore More Music</Link>
            </div>
        </section>

        {/* Next Show Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Next Show</h2>
                <p className="section-subtitle">Catch us live</p>
            </div>

            <div
                className="card"
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    textAlign: 'center',
                    background: 'var(--gradient-accent)',
                    color: 'white'
                }}
            >
                <h3 className="card-title" style={{fontSize: '2rem', color: 'white'}}>
                    The Blue Note - Charlotte, NC
                </h3>
                <p style={{fontSize: '1.5rem', fontWeight: 600, margin: '1rem 0'}}>
                    December 15, 2025 | 8:00 PM
                </p>
                <p className="card-text" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                    Join us for an unforgettable night of live music featuring songs from our new album plus all
                    your favorites.
                </p>
                <div style={{marginTop: '1.5rem'}}>
                    <Link
                        to="/tour"
                        className="btn btn-secondary"
                        style={{background: 'white', color: 'var(--primary-dark)', border: 'none'}}
                    >
                        Get Tickets
                    </Link>
                </div>
            </div>
        </section>

        {/* Newsletter Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Stay Connected</h2>
                <p className="section-subtitle">Subscribe to our newsletter for exclusive updates</p>
            </div>

            <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
                <form onSubmit={handleNewsletterSubmit}
                      style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        style={{
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            background: 'rgba(10, 14, 39, 0.5)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem'
                        }}
                    />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem'}}>
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </form>
            </div>
        </section>

        {/* Notification */}
        {notification && (<div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            style={{
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 2rem',
            background: notification.type === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 10000,
            animation: 'slideInRight 0.3s ease-out'
        }}>
            {notification.message}
        </div>)}
    </>);
};