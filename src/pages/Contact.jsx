import {useState} from 'react';

export default () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', inquiryType: '', eventDate: '', venue: '', subject: '', message: '', website: '' // honeypot
    });

    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        if (!phone) return true; // optional field
        const phoneRegex = /^[\d\s\-()]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
        // Clear error for this field
        setErrors(prev => ({...prev, [name]: ''}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous errors
        const newErrors = {};

        // Honeypot check
        if (formData.website !== '') {
            setNotification({message: 'Form submission failed. Please try again.', type: 'error'});
            setTimeout(() => setNotification(null), 3000);
            return;
        }

        // Validate name
        if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Validate email
        if (!validateEmail(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Validate phone
        if (formData.phone && !validatePhone(formData.phone.trim())) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Validate inquiry type
        if (!formData.inquiryType) {
            newErrors.inquiryType = 'Please select an inquiry type';
        }

        // Validate booking-specific fields
        if (formData.inquiryType === 'booking') {
            if (!formData.eventDate) {
                newErrors.eventDate = 'Event date is required for bookings';
            }
            if (formData.venue.trim().length < 3) {
                newErrors.venue = 'Please provide venue name and location';
            }
        }

        // Validate subject
        if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
        }

        // Validate message
        if (formData.message.trim().length < 20) {
            newErrors.message = 'Message must be at least 20 characters';
        }

        setErrors(newErrors);

        // If no errors, submit
        if (Object.keys(newErrors).length === 0) {
            setNotification({message: "Thank you for your message! We'll be in touch soon.", type: 'success'});
            setTimeout(() => setNotification(null), 3000);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                eventDate: '',
                venue: '',
                subject: '',
                message: '',
                website: ''
            });
        }
    };

    return (<>
        {/* Page Header */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">We'd love to hear from you</p>
            </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section">
            <div className="cards-grid">
                <div className="card text-center">
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎸</div>
                    <h3 className="card-title">Booking</h3>
                    <p className="card-text">Book us for your venue or event</p>
                    <a href="mailto:booking@midnightechoes.com" style={{color: 'var(--accent-electric)'}}>
                        booking@midnightechoes.com
                    </a>
                </div>

                <div className="card text-center">
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📰</div>
                    <h3 className="card-title">Press & Media</h3>
                    <p className="card-text">Media inquiries and press kits</p>
                    <a href="mailto:press@midnightechoes.com" style={{color: 'var(--accent-electric)'}}>
                        press@midnightechoes.com
                    </a>
                </div>

                <div className="card text-center">
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💬</div>
                    <h3 className="card-title">General</h3>
                    <p className="card-text">Questions, feedback, or just say hi</p>
                    <a href="mailto:info@midnightechoes.com" style={{color: 'var(--accent-electric)'}}>
                        info@midnightechoes.com
                    </a>
                </div>
            </div>
        </section>

        {/* Contact Form */}
        <section className="section">
            <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
                <h3 className="card-title text-center">Send Us a Message</h3>
                <p className="card-text text-center" style={{marginBottom: '2rem'}}>
                    Fill out the form below and we'll get back to you as soon as possible
                </p>

                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Name <span style={{color: '#ef4444'}}>*</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            aria-describedby={errors.name ? "name-error" : undefined}
                            aria-invalid={errors.name ? "true" : "false"}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.name ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem'
                            }}
                        />
                        {errors.name && (<span id="name-error" role="alert" style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                  {errors.name}
                </span>)}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Email <span style={{color: '#ef4444'}}>*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.email ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem'
                            }}
                        />
                        {errors.email && (<span style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                  {errors.email}
                </span>)}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Phone <span style={{color: 'var(--text-muted)', fontSize: '0.875rem'}}>(optional)</span>
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.phone ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem'
                            }}
                        />
                        {errors.phone && (<span style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                  {errors.phone}
                </span>)}
                    </div>

                    {/* Inquiry Type */}
                    <div>
                        <label htmlFor="inquiryType" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Inquiry Type <span style={{color: '#ef4444'}}>*</span>
                        </label>
                        <select
                            id="inquiryType"
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.inquiryType ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem'
                            }}
                        >
                            <option value="">-- Select inquiry type --</option>
                            <option value="booking">Booking Inquiry</option>
                            <option value="press">Press/Media</option>
                            <option value="general">General Question</option>
                            <option value="fan">Fan Message</option>
                            <option value="collaboration">Collaboration</option>
                        </select>
                        {errors.inquiryType && (<span style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                  {errors.inquiryType}
                </span>)}
                    </div>

                    {/* Event Date (conditional) */}
                    {formData.inquiryType === 'booking' && (<div>
                        <label htmlFor="eventDate" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Event Date <span style={{color: '#ef4444'}}>*</span>
                        </label>
                        <input
                            id="eventDate"
                            name="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.eventDate ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem'
                            }}
                        />
                        {errors.eventDate && (<span style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                    {errors.eventDate}
                  </span>)}
                    </div>)}

                    {/* Venue (conditional) */}
                    {formData.inquiryType === 'booking' && (<div>
                        <label htmlFor="venue" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Venue/Location <span style={{color: '#ef4444'}}>*</span>
                        </label>
                        <input
                            id="venue"
                            name="venue"
                            type="text"
                            value={formData.venue}
                            onChange={handleChange}
                            placeholder="Venue name and city"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.venue ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem'
                            }}
                        />
                        {errors.venue && (<span style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                    {errors.venue}
                  </span>)}
                    </div>)}

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Subject <span style={{color: '#ef4444'}}>*</span>
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Brief subject of your message"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.subject ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem'
                            }}
                        />
                        {errors.subject && (<span style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                  {errors.subject}
                </span>)}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" style={{
                            display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600
                        }}>
                            Message <span style={{color: '#ef4444'}}>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us more about your inquiry... (minimum 20 characters)"
                            required
                            rows={6}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: `1px solid ${errors.message ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                                background: 'rgba(10, 14, 39, 0.5)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                resize: 'vertical',
                                fontFamily: 'inherit'
                            }}
                        />
                        {errors.message && (<span style={{
                            color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'
                        }}>
                  {errors.message}
                </span>)}
                        <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem'}}>
                            {formData.message.length} / 20 characters minimum
                        </p>
                    </div>

                    {/* Honeypot */}
                    <input
                        id="website"
                        name="website"
                        type="text"
                        value={formData.website}
                        onChange={handleChange}
                        autoComplete="off"
                        tabIndex={-1}
                        style={{display: 'none'}}
                    />

                    {/* Submit Button */}
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem'}}>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setFormData({
                                name: '',
                                email: '',
                                phone: '',
                                inquiryType: '',
                                eventDate: '',
                                venue: '',
                                subject: '',
                                message: '',
                                website: ''
                            })}
                        >
                            Clear Form
                        </button>
                    </div>

                    <p style={{
                        fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem'
                    }}>
                        We typically respond within 24-48 hours
                    </p>
                </form>
            </div>
        </section>

        {/* Management Contact */}
        <section className="section">
            <div className="card" style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
                <h3 className="card-title">Management Contact</h3>
                <p className="card-text">
                    For professional bookings and business inquiries, please contact our management team:
                </p>
                <div style={{marginTop: '1.5rem'}}>
                    <p style={{fontWeight: 600, color: 'var(--text-primary)'}}>Echo Management Group</p>
                    <p style={{color: 'var(--text-secondary)'}}>Alex Hagos, Manager</p>
                    <p style={{color: 'var(--text-muted)', marginTop: '0.5rem'}}>
                        📧 <a href="mailto:management@midnightechoes.com" style={{color: 'var(--accent-electric)'}}>
                        management@midnightechoes.com
                    </a><br/>
                        📞 <a href="tel:+1234567890" style={{color: 'var(--accent-electric)'}}>(123) 456-7890</a>
                    </p>
                </div>
            </div>
        </section>

        {/* Social Media */}
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Connect With Us</h2>
                <p className="section-subtitle">Follow us on social media for the latest updates</p>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '1.5rem'}}>
                <a href="https://facebook.com/midnightechoes" rel="noopener noreferrer" target="_blank"
                   style={{
                       width: '50px',
                       height: '50px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       background: 'rgba(99, 102, 241, 0.2)',
                       borderRadius: '50%',
                       transition: 'all 0.2s'
                   }}>
                    📘
                </a>
                <a href="https://instagram.com/midnightechoes" rel="noopener noreferrer" target="_blank"
                   style={{
                       width: '50px',
                       height: '50px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       background: 'rgba(99, 102, 241, 0.2)',
                       borderRadius: '50%',
                       transition: 'all 0.2s'
                   }}>
                    📷
                </a>
                <a href="https://twitter.com/midnightechoes" rel="noopener noreferrer" target="_blank"
                   style={{
                       width: '50px',
                       height: '50px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       background: 'rgba(99, 102, 241, 0.2)',
                       borderRadius: '50%',
                       transition: 'all 0.2s'
                   }}>
                    🐦
                </a>
                <a href="https://youtube.com/midnightechoes" rel="noopener noreferrer" target="_blank"
                   style={{
                       width: '50px',
                       height: '50px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       background: 'rgba(99, 102, 241, 0.2)',
                       borderRadius: '50%',
                       transition: 'all 0.2s'
                   }}>
                    📺
                </a>
                <a href="https://spotify.com/midnightechoes" rel="noopener noreferrer" target="_blank"
                   style={{
                       width: '50px',
                       height: '50px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       background: 'rgba(99, 102, 241, 0.2)',
                       borderRadius: '50%',
                       transition: 'all 0.2s'
                   }}>
                    🎵
                </a>
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