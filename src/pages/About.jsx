import {useState, useEffect} from 'react';
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
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);

    const galleryImages = [
        {src: gallery_1, alt: 'The Midnight Echoes performing live', caption: 'Live at The Blue Note'},
        {src: gallery_2, alt: 'Band in recording studio', caption: 'Recording "Shadows & Light"'},
        {src: gallery_3, alt: 'Band members backstage', caption: 'Backstage moments'},
        {src: gallery_4, alt: 'Concert crowd', caption: 'Our amazing fans'}
    ];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setZoomLevel(1);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        setZoomLevel(1);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        setZoomLevel(1);
    };

    const toggleZoom = () => {
        setZoomLevel(prev => prev === 1 ? 2 : 1);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'z' || e.key === 'Z') toggleZoom();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [lightboxOpen, currentImageIndex, zoomLevel]);

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
                <p className="section-subtitle">Behind the scenes and live performances - Click to view full size</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            height: '250px',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.querySelector('.overlay').style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.querySelector('.overlay').style.opacity = '0';
                        }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <div
                            className="overlay"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.7)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                color: 'white',
                                fontSize: '2rem'
                            }}
                        >
                            🔍
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.95)',
                    zIndex: 10000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.3s ease'
                }}
                onClick={closeLightbox}
            >
                {/* Close Button */}
                <button
                    onClick={closeLightbox}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        color: 'white',
                        fontSize: '2rem',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        zIndex: 10002
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'rotate(90deg)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'rotate(0deg)';
                    }}
                >
                    ✕
                </button>

                {/* Previous Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                    }}
                    style={{
                        position: 'absolute',
                        left: '20px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        color: 'white',
                        fontSize: '2rem',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        zIndex: 10002
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    ‹
                </button>

                {/* Next Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                    }}
                    style={{
                        position: 'absolute',
                        right: '20px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        color: 'white',
                        fontSize: '2rem',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        zIndex: 10002
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    ›
                </button>

                {/* Zoom Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleZoom();
                    }}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        zIndex: 10002
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    }}
                >
                    {zoomLevel === 1 ? '🔍 Zoom In' : '🔍 Zoom Out'}
                </button>

                {/* Image Container */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}
                >
                    <img
                        src={galleryImages[currentImageIndex].src}
                        alt={galleryImages[currentImageIndex].alt}
                        style={{
                            maxWidth: '100%',
                            maxHeight: 'calc(90vh - 100px)',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            transform: `scale(${zoomLevel})`,
                            transition: 'transform 0.3s ease',
                            cursor: zoomLevel === 1 ? 'zoom-in' : 'zoom-out'
                        }}
                        onClick={toggleZoom}
                    />

                    {/* Caption and Counter */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '1rem 2rem',
                        borderRadius: '25px',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            color: 'white',
                            margin: 0,
                            fontSize: '1.1rem',
                            marginBottom: '0.5rem'
                        }}>
                            {galleryImages[currentImageIndex].caption}
                        </p>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            margin: 0,
                            fontSize: '0.9rem'
                        }}>
                            {currentImageIndex + 1} / {galleryImages.length}
                        </p>
                    </div>

                    {/* Keyboard Hints */}
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '0.85rem',
                        textAlign: 'center',
                        margin: 0
                    }}>
                        Use ← → arrow keys to navigate • Press ESC to close • Click image or press Z to zoom
                    </p>
                </div>
            </div>
        )}
    </>);
};