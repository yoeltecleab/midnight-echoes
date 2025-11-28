import {Link} from 'react-router-dom';
import member_alex from '../assets/images/member-alex.jpg';
import member_sarah from '../assets/images/member-sarah.jpg';
import member_marcus from '../assets/images/member-marcus.jpg';
import member_emily from '../assets/images/member-emily.jpg';
import gallery_1 from '../assets/images/gallery-1.jpg';
import gallery_2 from '../assets/images/gallery-2.jpg';
import gallery_3 from '../assets/images/gallery-3.jpg';
import gallery_4 from '../assets/images/gallery-4.jpg';

export default () => {
    return (<>
        {/* Page Header */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">About The Band</h2>
                <p className="section-subtitle">Our story, our sound, our passion</p>
            </div>
        </section>

        {/* Band Story Section */}
        <section className="section">
            <div className="card" style={{maxWidth: '1000px', margin: '0 auto'}}>
                <h3 className="card-title">Our Story</h3>
                <p className="card-text">
                    The Midnight Echoes formed in 2018 when four friends with a shared love for atmospheric indie
                    rock
                    came together in a small garage in Charlotte, North Carolina. What started as casual jam
                    sessions
                    quickly evolved into something more profound - a musical chemistry that couldn't be ignored.
                </p>
                <p className="card-text">
                    Our name reflects our sound: music that resonates long after the performance ends, like echoes
                    in
                    the stillness of midnight. We blend haunting melodies with powerful instrumentals, creating a
                    sonic
                    landscape that's both intimate and expansive.
                </p>
                <p className="card-text">
                    Over the past seven years, we've released two studio albums, played hundreds of shows across the
                    country, and built an incredible community of fans who connect with our music on a deep level.
                    Our upcoming third album, "Shadows & Light," represents our most mature and ambitious work to
                    date.
                </p>
            </div>
        </section>

        {/* Band Members Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Meet the Band</h2>
                <p className="section-subtitle">The people behind the music</p>
            </div>

            <div className="cards-grid">
                <article className="card">
                    <img
                        src={member_alex}
                        alt="Alex Hagos - Lead Vocals & Guitar"
                        className="card-image"
                    />
                    <h3 className="card-title">Alex Hagos</h3>
                    <p style={{color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '0.5rem'}}>
                        Lead Vocals & Guitar
                    </p>
                    <p className="card-text">
                        Alex's haunting vocals and intricate guitar work form the heart of our sound. Influenced by
                        artists
                        like Jeff Buckley and Radiohead, Alex brings emotional depth and technical prowess to every
                        performance.
                    </p>
                </article>

                <article className="card">
                    <img
                        src={member_sarah}
                        alt="Sarah Chen - Bass & Backing Vocals"
                        className="card-image"
                    />
                    <h3 className="card-title">Sarah Chen</h3>
                    <p style={{color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '0.5rem'}}>
                        Bass & Backing Vocals
                    </p>
                    <p className="card-text">
                        Sarah's melodic bass lines provide the foundation that drives our songs forward. Her
                        background in
                        jazz fusion brings unexpected harmonies and rhythmic complexity to our indie rock
                        foundation.
                    </p>
                </article>

                <article className="card">
                    <img
                        src={member_marcus}
                        alt="Marcus Washington - Drums & Percussion"
                        className="card-image"
                    />
                    <h3 className="card-title">Marcus Washington</h3>
                    <p style={{color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '0.5rem'}}>
                        Drums & Percussion
                    </p>
                    <p className="card-text">
                        Marcus's dynamic drumming ranges from subtle, atmospheric textures to explosive crescendos.
                        His
                        intuitive sense of dynamics and timing creates the emotional landscape our songs live in.
                    </p>
                </article>

                <article className="card">
                    <img
                        src={member_emily}
                        alt="Emily Rodriguez - Keyboards & Synth"
                        className="card-image"
                    />
                    <h3 className="card-title">Emily Rodriguez</h3>
                    <p style={{color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '0.5rem'}}>
                        Keyboards & Synth
                    </p>
                    <p className="card-text">
                        Emily's ethereal keyboard textures and analog synth work add atmospheric layers that make
                        our sound
                        truly unique. She's the sonic architect behind our most memorable moments.
                    </p>
                </article>
            </div>
        </section>

        {/* Musical Style Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Our Sound</h2>
                <p className="section-subtitle">What makes us unique</p>
            </div>

            <div className="cards-grid">
                <div className="card">
                    <h3 className="card-title">🎸 Musical Influences</h3>
                    <p className="card-text">
                        Drawing inspiration from Radiohead, The National, Sigur Rós, and Explosions in the Sky, we
                        create
                        atmospheric indie rock that blends post-rock dynamics with indie sensibilities.
                    </p>
                </div>

                <div className="card">
                    <h3 className="card-title">🎵 Genre</h3>
                    <p className="card-text">
                        We describe our music as atmospheric indie rock with elements of post-rock, dream pop, and
                        alternative rock. It's music for late-night drives and introspective moments.
                    </p>
                </div>

                <div className="card">
                    <h3 className="card-title">🎼 Song Structure</h3>
                    <p className="card-text">
                        Our songs often build from quiet, intimate verses to powerful, cathartic choruses. We're not
                        afraid
                        of dynamics, silence, or letting a moment breathe.
                    </p>
                </div>
            </div>
        </section>

        {/* Achievements Section */}
        <section className="section">
            <div className="card" style={{maxWidth: '1000px', margin: '0 auto'}}>
                <h3 className="card-title">Achievements & Recognition</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(99, 102, 241, 0.2)'}}>
                        🏆 <strong>Best Indie Rock Album 2023</strong> - Alternative Music Awards
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(99, 102, 241, 0.2)'}}>
                        🎵 <strong>Featured on Spotify's "New Indie Gems"</strong> - Over 500K streams
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(99, 102, 241, 0.2)'}}>
                        🎤 <strong>Performed at SXSW 2024</strong> - Austin, Texas
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(99, 102, 241, 0.2)'}}>
                        📻 <strong>Radio Play on 100+ College Stations</strong> - Nationwide
                    </li>
                    <li style={{padding: '0.75rem 0'}}>
                        🎸 <strong>Opened for The National</strong> - 2023 Tour
                    </li>
                </ul>
            </div>
        </section>

        {/* Press Kit Section */}
        <section className="section" id="press-kit">
            <div className="section-header">
                <h2 className="section-title">Press & Media</h2>
                <p className="section-subtitle">Resources for journalists and media</p>
            </div>

            <div className="card" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
                <h3 className="card-title">Download Press Kit</h3>
                <p className="card-text">
                    Our press kit includes high-resolution photos, biography, discography, and contact information
                    for media inquiries.
                </p>
                <div style={{
                    display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap'
                }}>
                    <button className="btn btn-primary"
                            onClick={() => alert('Press kit download coming soon!')}>Download Full Press Kit (PDF)
                    </button>
                    <button className="btn btn-secondary"
                            onClick={() => alert('Photos download coming soon!')}>Download Photos (ZIP)
                    </button>
                </div>
                <p style={{marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
                    For media inquiries, please <Link to="/contact">contact us</Link> directly.
                </p>
            </div>
        </section>

        {/* Photo Gallery Preview */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Gallery</h2>
                <p className="section-subtitle">Behind the scenes and live performances</p>
            </div>

            <div
                style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
                <img
                    src={gallery_1}
                    alt="The Midnight Echoes performing live"
                    style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px'}}
                />
                <img
                    src={gallery_2}
                    alt="Band in recording studio"
                    style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px'}}
                />
                <img
                    src={gallery_3}
                    alt="Band members backstage"
                    style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px'}}
                />
                <img
                    src={gallery_4}
                    alt="Concert crowd"
                    style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px'}}
                />
            </div>
        </section>
    </>);
};