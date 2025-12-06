import {useState} from 'react';

export default () => {
    const [filter, setFilter] = useState('upcoming');
    const [email, setEmail] = useState('');
    const [notification, setNotification] = useState(null);
    const [mapLocation, setMapLocation] = useState(null);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleTourAlertSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setNotification({message: "You're signed up! We'll notify you about new shows.", type: 'success'});
            setEmail('');
            setTimeout(() => setNotification(null), 3000);
        } else {
            setNotification({message: 'Please enter a valid email address', type: 'error'});
            setTimeout(() => setNotification(null), 3000);
        }
    };

    const showVenue = (lat, lng, name) => {
        setMapLocation({lat, lng, name});
        document.getElementById('map-container')?.scrollIntoView({behavior: 'smooth'});
    };

    const upcomingShows = [{
        date: '15',
        month: 'DEC',
        year: '2025',
        venue: 'The Blue Note',
        location: 'Charlotte, NC',
        doors: '7:00 PM',
        show: '8:00 PM',
        lat: 35.2271,
        lng: -80.8431
    }, {
        date: '28',
        month: 'DEC',
        year: '2025',
        venue: "Cat's Cradle",
        location: 'Carrboro, NC',
        doors: '6:30 PM',
        show: '7:30 PM',
        lat: 35.9101,
        lng: -79.0753
    }, {
        date: '10',
        month: 'JAN',
        year: '2026',
        venue: 'The Orange Peel',
        location: 'Asheville, NC',
        doors: '7:00 PM',
        show: '8:00 PM',
        lat: 35.5951,
        lng: -82.5515
    }, {
        date: '25',
        month: 'JAN',
        year: '2026',
        venue: '9:30 Club',
        location: 'Washington, DC',
        doors: '7:00 PM',
        show: '8:00 PM',
        lat: 38.9072,
        lng: -77.0369
    }, {
        date: '8',
        month: 'FEB',
        year: '2026',
        venue: 'Brooklyn Steel',
        location: 'Brooklyn, NY',
        doors: '7:30 PM',
        show: '8:30 PM',
        lat: 40.7128,
        lng: -73.9352
    },];

    const pastShows = [{
        date: '5', month: 'NOV', year: '2025', venue: 'The Fillmore', location: 'Charlotte, NC'
    }, {date: '20', month: 'OCT', year: '2025', venue: 'Terminal West', location: 'Atlanta, GA'},];

    return (<>
        {/* Page Header */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Tour Dates</h2>
                <p className="section-subtitle">Catch us live - see our upcoming shows and get tickets</p>
            </div>
        </section>

        {/* Tour Alert Signup */}
        <section className="section">
            <div
                className="card"
                style={{
                    maxWidth: '700px', margin: '0 auto', textAlign: 'center', background: 'var(--gradient-accent)'
                }}
            >
                <h3 className="card-title" style={{color: 'white'}}>Never Miss a Show</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.5rem'}}>
                    Get notified when we announce shows in your area
                </p>
                <form onSubmit={handleTourAlertSubmit}
                      style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            border: 'none',
                            flex: '1',
                            minWidth: '250px',
                            fontSize: '1rem'
                        }}
                    />
                    <button
                        className="btn btn-secondary"
                        type="submit"
                        style={{background: 'white', color: 'var(--primary-dark)', border: 'none'}}
                    >
                        Sign Up for Alerts
                    </button>
                </form>
            </div>
        </section>

        {/* Filter Options */}
        <section className="section">
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
                <div style={{
                    display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem'
                }}>
                    <button
                        className="btn btn-secondary"
                        onClick={() => setFilter('all')}
                        style={filter === 'all' ? {background: 'var(--gradient-accent)', color: 'white'} : {}}
                    >
                        All Shows
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => setFilter('upcoming')}
                        style={filter === 'upcoming' ? {background: 'var(--gradient-accent)', color: 'white'} : {}}
                    >
                        Upcoming
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => setFilter('past')}
                        style={filter === 'past' ? {background: 'var(--gradient-accent)', color: 'white'} : {}}
                    >
                        Past Shows
                    </button>
                </div>
            </div>
        </section>

        {/* Upcoming Shows */}
        {(filter === 'all' || filter === 'upcoming') && (<section className="section" id="upcoming-shows">
            <div className="section-header">
                <h2 className="section-title">Upcoming Shows</h2>
                <p className="section-subtitle">Don't miss out - grab your tickets now</p>
            </div>

            <div style={{
                maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem'
            }}>
                {upcomingShows.map((show, index) => (<div
                    key={index}
                    className="card"
                    style={{display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap'}}
                >
                    <div style={{
                        minWidth: '120px',
                        textAlign: 'center',
                        padding: '1rem',
                        background: 'var(--gradient-accent)',
                        borderRadius: '12px'
                    }}>
                        <p style={{
                            fontSize: '2rem', fontWeight: 700, margin: 0, color: 'white'
                        }}>{show.date}</p>
                        <p style={{margin: 0, color: 'white'}}>{show.month}</p>
                        <p style={{
                            margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)'
                        }}>{show.year}</p>
                    </div>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <h3 style={{margin: '0 0 0.5rem 0', color: 'var(--text-primary)'}}>{show.venue}</h3>
                        <p style={{
                            margin: '0 0 0.25rem 0', color: 'var(--text-secondary)'
                        }}>📍 {show.location}</p>
                        <p style={{margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                            Doors: {show.doors} • Show: {show.show}
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                        <button className="btn btn-primary"
                                onClick={() => alert('Tickets available soon!')}>Get Tickets
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => showVenue(show.lat, show.lng, show.venue)}
                        >
                            View Map
                        </button>
                    </div>
                </div>))}
            </div>
        </section>)}

        {/* Past Shows */}
        {(filter === 'all' || filter === 'past') && (<section className="section" id="past-shows">
            <div className="section-header">
                <h2 className="section-title">Past Shows</h2>
                <p className="section-subtitle">Where we've been</p>
            </div>

            <div style={{
                maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem'
            }}>
                {pastShows.map((show, index) => (<div
                    key={index}
                    className="card"
                    style={{
                        display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', opacity: 0.7
                    }}
                >
                    <div style={{
                        minWidth: '120px',
                        textAlign: 'center',
                        padding: '1rem',
                        background: 'rgba(99, 102, 241, 0.3)',
                        borderRadius: '12px'
                    }}>
                        <p style={{
                            fontSize: '2rem', fontWeight: 700, margin: 0, color: 'white'
                        }}>{show.date}</p>
                        <p style={{margin: 0, color: 'white'}}>{show.month}</p>
                        <p style={{
                            margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)'
                        }}>{show.year}</p>
                    </div>
                    <div style={{flex: 1, minWidth: '300px'}}>
                        <h3 style={{margin: '0 0 0.5rem 0', color: 'var(--text-primary)'}}>{show.venue}</h3>
                        <p style={{
                            margin: '0 0 0.25rem 0', color: 'var(--text-secondary)'
                        }}>📍 {show.location}</p>
                        <p style={{margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem'}}>✓ Show
                            Complete</p>
                    </div>
                </div>))}
            </div>
        </section>)}

        {/* Map Section */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Venue Map</h2>
                <p className="section-subtitle">Click "View Map" on any show to see the location</p>
            </div>

            <div className="card" style={{maxWidth: '1000px', margin: '0 auto'}}>
                <div id="map-container" style={{width: '100%', minHeight: '500px'}}>
                    {mapLocation ? (
                        <div style={{textAlign: 'center'}}>
                            <p style={{
                                color: 'var(--text-primary)',
                                marginBottom: '1rem',
                                fontWeight: 600,
                                fontSize: '1.2rem'
                            }}>
                                📍 {mapLocation.name}
                            </p>
                            <iframe
                                width="100%"
                                height="450"
                                style={{border: 0, borderRadius: '12px'}}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapLocation.lat},${mapLocation.lng}&zoom=15`}
                            />
                            <div style={{
                                marginTop: '1rem',
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center'
                            }}>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${mapLocation.lat},${mapLocation.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Open in Google Maps
                                </a>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setMapLocation(null)}
                                >
                                    Clear Map
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div style={{
                            height: '400px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p style={{fontSize: '3rem', margin: 0}}>🗺️</p>
                            <p style={{color: 'var(--text-muted)', marginTop: '1rem'}}>
                                Select a show to view venue location
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* Notification */}
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