import {useState} from 'react';
import album_shadows_light from '../assets/images/album-shadows-light.jpg';
import album_distant_shores from '../assets/images/album-distant-shores.jpg';
import album_first_light from '../assets/images/album-first-light.jpg';

export default () => {
    const [notification, setNotification] = useState(null);

    const handlePlay = (songName) => {
        setNotification(`Playing ${songName}...`);
        setTimeout(() => setNotification(null), 2000);
    };

    return (<>
        {/* Page Header */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Our Music</h2>
                <p className="section-subtitle">Explore our discography and listen to our latest releases</p>
            </div>
        </section>

        {/* Streaming Links Section */}
        <section className="section" id="streaming">
            <div className="card" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
                <h3 className="card-title">Listen Everywhere</h3>
                <p className="card-text">Stream our music on your favorite platform</p>
                <div style={{
                    display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem'
                }}>
                    <a className="btn btn-primary" href="https://open.spotify.com/artist/midnightechoes"
                       target="_blank" rel="noopener noreferrer">
                        🎵 Spotify
                    </a>
                    <a className="btn btn-primary" href="https://music.apple.com/artist/midnightechoes"
                       target="_blank" rel="noopener noreferrer">
                        🍎 Apple Music
                    </a>
                    <a className="btn btn-primary" href="https://youtube.com/midnightechoes" target="_blank"
                       rel="noopener noreferrer">
                        📺 YouTube
                    </a>
                    <a className="btn btn-secondary" href="https://soundcloud.com/midnightechoes" target="_blank"
                       rel="noopener noreferrer">
                        ☁️ SoundCloud
                    </a>
                    <a className="btn btn-secondary" href="https://bandcamp.com/midnightechoes" target="_blank"
                       rel="noopener noreferrer">
                        🎸 Bandcamp
                    </a>
                </div>
            </div>
        </section>

        {/* Discography Section */}
        <section className="section" id="discography">
            <div className="section-header">
                <h2 className="section-title">Albums</h2>
                <p className="section-subtitle">Our studio releases</p>
            </div>

            <div className="cards-grid">
                <article className="card">
                    <img
                        src={album_shadows_light}
                        alt="Shadows & Light Album Cover"
                        className="card-image"
                    />
                    <h3 className="card-title">Shadows & Light</h3>
                    <p style={{color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '0.5rem'}}>
                        2025 • Coming Soon
                    </p>
                    <p className="card-text">
                        Our most ambitious work yet - 12 tracks exploring the duality of human experience through
                        atmospheric soundscapes and introspective lyrics.
                    </p>
                    <div style={{marginTop: '1rem'}}>
                        <button className="btn btn-primary" onClick={() => alert('Pre-order coming soon!')}>
                            Pre-Order
                        </button>
                    </div>
                </article>

                <article className="card">
                    <img
                        src={album_distant_shores}
                        alt="Distant Shores Album Cover"
                        className="card-image"
                    />
                    <h3 className="card-title">Distant Shores</h3>
                    <p style={{color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '0.5rem'}}>
                        2022 • 10 Tracks
                    </p>
                    <p className="card-text">
                        Our sophomore album features fan favorites like "Echoes in the Dark" and "Lighthouse."
                        A journey through longing and belonging.
                    </p>
                    <div style={{marginTop: '1rem'}}>
                        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"
                           className="btn btn-primary">Listen Now</a>
                    </div>
                </article>

                <article className="card">
                    <img
                        src={album_first_light}
                        alt="First Light Album Cover"
                        className="card-image"
                    />
                    <h3 className="card-title">First Light</h3>
                    <p style={{color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '0.5rem'}}>
                        2019 • 8 Tracks
                    </p>
                    <p className="card-text">
                        Our debut album introduced our signature sound - atmospheric, emotional, and unforgettable.
                        Where it all began.
                    </p>
                    <div style={{marginTop: '1rem'}}>
                        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"
                           className="btn btn-primary">Listen Now</a>
                    </div>
                </article>
            </div>
        </section>

        {/* Featured Songs Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Popular Tracks</h2>
                <p className="section-subtitle">Fan favorites and most streamed songs</p>
            </div>

            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    {[{number: 1, title: 'Echoes in the Dark', album: 'Distant Shores', year: '2022'}, {
                        number: 2, title: 'Lighthouse', album: 'Distant Shores', year: '2022'
                    }, {number: 3, title: 'Midnight Drive', album: 'First Light', year: '2019'}, {
                        number: 4, title: 'Wavelength', album: 'First Light', year: '2019'
                    }, {number: 5, title: 'Horizon', album: 'Distant Shores', year: '2022'},].map((song) => (<div
                        key={song.number}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: '12px'
                        }}
                    >
                        <div style={{
                            minWidth: '50px',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: 'var(--accent-electric)'
                        }}>
                            {song.number}
                        </div>
                        <div style={{flex: 1}}>
                            <h4 style={{
                                margin: '0 0 0.25rem 0', color: 'var(--text-primary)'
                            }}>{song.title}</h4>
                            <p style={{margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                                {song.album} • {song.year}
                            </p>
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem'}}>
                            <button
                                className="btn btn-primary"
                                onClick={() => handlePlay(song.title)}
                                style={{padding: '0.5rem 1rem'}}
                            >
                                ▶️ Play
                            </button>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>

        {/* Music Videos Section */}
        <section className="section" id="videos">
            <div className="section-header">
                <h2 className="section-title">Music Videos</h2>
                <p className="section-subtitle">Visual stories to accompany our songs</p>
            </div>

            <div className="cards-grid">
                {[{
                    title: 'Echoes in the Dark',
                    description: 'A cinematic journey through memory and emotion. Directed by Sarah Martinez.'
                }, {
                    title: 'Lighthouse',
                    description: 'Shot on location in coastal Maine. A visual metaphor for guidance and hope.'
                }, {
                    title: 'Midnight Drive',
                    description: 'Our debut music video - a nocturnal adventure through city streets.'
                },].map((video) => (<article key={video.title} className="card">
                    <div style={{
                        width: '100%',
                        height: '200px',
                        background: 'rgba(99, 102, 241, 0.2)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                    }}>
                        <p style={{fontSize: '3rem'}}>🎬</p>
                    </div>
                    <h3 className="card-title">{video.title}</h3>
                    <p className="card-text">{video.description}</p>
                    <button className="btn btn-primary" onClick={() => alert('Opening video player...')}>
                        Watch Video
                    </button>
                </article>))}
            </div>
        </section>

        {/* Lyrics Section */}
        <section className="section" id="lyrics">
            <div className="section-header">
                <h2 className="section-title">Lyrics</h2>
                <p className="section-subtitle">Read the words behind the music</p>
            </div>

            <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
                <h3 className="card-title">Featured: Echoes in the Dark</h3>
                <div style={{marginTop: '1.5rem', lineHeight: 1.8, color: 'var(--text-secondary)'}}>
                    <p><em>[Verse 1]</em></p>
                    <p>
                        In the silence of the midnight hour<br/>
                        Where shadows dance and secrets flower<br/>
                        I hear your voice like distant thunder<br/>
                        Pulling me six feet under
                    </p>

                    <p style={{marginTop: '1.5rem'}}><em>[Chorus]</em></p>
                    <p>
                        These echoes in the dark<br/>
                        They're calling out your name<br/>
                        Like footsteps in my heart<br/>
                        Nothing feels the same
                    </p>

                    <p style={{marginTop: '1.5rem'}}><em>[Verse 2]</em></p>
                    <p>
                        The city sleeps but I'm still waking<br/>
                        Every breath another aching<br/>
                        For moments that we left behind<br/>
                        In corners of my restless mind
                    </p>

                    <p style={{marginTop: '1.5rem'}}><em>[Chorus]</em></p>
                    <p>
                        These echoes in the dark<br/>
                        They're calling out your name<br/>
                        Like footsteps in my heart<br/>
                        Nothing feels the same
                    </p>
                </div>
                <div style={{marginTop: '2rem', textAlign: 'center'}}>
                    <button className="btn btn-secondary"
                            onClick={() => alert('Full lyrics page coming soon!')}>View All Lyrics
                    </button>
                </div>
            </div>
        </section>

        {/* Notification */}
        {notification && (<div style={{
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 2rem',
            background: '#10b981',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 10000,
            animation: 'slideInRight 0.3s ease-out'
        }}>
            {notification}
        </div>)}
    </>);
};