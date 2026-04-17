function Contact() {
  return (
    <div className="app">
      <div className="top-bar">
        <div className="top-bar-content">
          <span className="business-name">PHX Unlock Services, LLC</span>
          <nav className="desktop-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/pricing" className="nav-link">Pricing</a>
            <a href="/service-areas" className="nav-link">Service Areas</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a href="tel:6238664245" className="nav-link phone-link">📞 623-866-4245</a>
          </nav>
          <a href="/" className="menu-button" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }}>✕</a>
        </div>
      </div>
      <main className="main">
        <div style={{ padding: '2rem 1.5rem', color: '#ffffff' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Contact Us</h1>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '2px solid #ffd700',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ffd700' }}>Emergency Lockout?</h2>
            <a href="tel:6238664245" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1.5rem 3rem',
              fontSize: '2rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffd700 0%, #ffcc00 100%)',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              📞 623-866-4245
            </a>
            <p style={{ color: '#b0b0c0', fontSize: '0.875rem' }}>
              Available 24 hours a day, 7 days a week
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Business Information</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.5rem' }}>Business Name</p>
              <p style={{ color: '#ffffff', fontSize: '1.125rem' }}>PHX Unlock Services, LLC</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.5rem' }}>Phone</p>
              <p style={{ color: '#ffffff', fontSize: '1.125rem' }}>
                <a href="tel:6238664245" style={{ color: '#ffffff', textDecoration: 'none' }}>623-866-4245</a>
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.5rem' }}>Email</p>
              <p style={{ color: '#ffffff', fontSize: '1.125rem' }}>
                <a href="mailto:info@phxunlock.com" style={{ color: '#ffffff', textDecoration: 'none' }}>info@phxunlock.com</a>
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.5rem' }}>Service Address</p>
              <p style={{ color: '#ffffff', fontSize: '1.125rem', lineHeight: '1.6' }}>
                8607 W Wilshire Dr<br/>
                Phoenix, AZ 85037
              </p>
              <p style={{ color: '#8888a0', fontSize: '0.875rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                Mobile service - we come to you
              </p>
            </div>

            <div>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.5rem' }}>Hours</p>
              <p style={{ color: '#ffffff', fontSize: '1.125rem' }}>
                24/7 Emergency Service
              </p>
            </div>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Service Area</h2>
            <p style={{ color: '#b0b0c0', lineHeight: '1.8' }}>
              We serve all of Phoenix and the surrounding metro area including:
            </p>
            <p style={{ color: '#ffffff', marginTop: '1rem', lineHeight: '1.8' }}>
              Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Avondale, Goodyear, Buckeye, Fountain Hills, Paradise Valley, Cave Creek, Anthem, Sun City, and more.
            </p>
            <p style={{ color: '#b0b0c0', marginTop: '1rem', lineHeight: '1.8' }}>
              <a href="/service-areas" style={{ color: '#ffd700', textDecoration: 'underline' }}>View full service area list →</a>
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>How to Reach Us</h2>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.5rem' }}>For Emergency Lockout Service:</p>
              <p style={{ color: '#b0b0c0' }}>Call us directly at <a href="tel:6238664245" style={{ color: '#ffd700' }}>623-866-4245</a> for prompt dispatch</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.5rem' }}>For Price Quote:</p>
              <p style={{ color: '#b0b0c0' }}>Use our <a href="/" style={{ color: '#ffd700' }}>online quote calculator</a> or call us</p>
            </div>
            <div>
              <p style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.5rem' }}>For General Inquiries:</p>
              <p style={{ color: '#b0b0c0' }}>Email us at <a href="mailto:info@phxunlock.com" style={{ color: '#ffd700' }}>info@phxunlock.com</a></p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/" style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #ffd700 0%, #ffcc00 100%)',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700
            }}>
              Get a Quote
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
