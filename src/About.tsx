function About() {
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
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About Us</h1>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ffd700' }}>PHX Unlock Services, LLC</h2>
            <p style={{ color: '#b0b0c0', lineHeight: '1.8', marginBottom: '1rem' }}>
              We are a locally-owned and operated car lockout service company serving the Phoenix metropolitan area. Our business is registered and licensed in Arizona, and we carry full liability insurance for your protection.
            </p>
            <p style={{ color: '#b0b0c0', lineHeight: '1.8' }}>
              PHX Unlock Services, LLC specializes in emergency car lockout services. When you're locked out of your vehicle, we provide fast, professional, and affordable assistance to get you back on the road.
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Experience</h2>
            <p style={{ color: '#b0b0c0', lineHeight: '1.8', marginBottom: '1rem' }}>
              Established in 2025, PHX Unlock Services was founded to provide honest, transparent car lockout services to Phoenix residents. We saw too many customers being overcharged or misled by other services, and we set out to do better.
            </p>
            <p style={{ color: '#b0b0c0', lineHeight: '1.8' }}>
              Our founder has extensive experience in automotive services and customer service, ensuring every call is handled professionally and every customer is treated with respect.
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Location</h2>
            <p style={{ color: '#b0b0c0', lineHeight: '1.8', marginBottom: '1rem' }}>
              📍 <strong style={{ color: '#ffffff' }}>Service Address:</strong><br/>
              8607 W Wilshire Dr<br/>
              Phoenix, AZ 85037
            </p>
            <p style={{ color: '#8888a0', fontSize: '0.875rem', fontStyle: 'italic' }}>
              We are a mobile service operating from our West Phoenix location. We come to you anywhere in the Phoenix metro area.
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why Choose Us?</h2>
            <ul style={{ marginLeft: '1.5rem', color: '#b0b0c0', lineHeight: '2' }}>
              <li><strong style={{ color: '#ffffff' }}>Licensed & Insured:</strong> Full liability coverage for your protection</li>
              <li><strong style={{ color: '#ffffff' }}>Transparent Pricing:</strong> $20 base fee + $1 per mile - no surprises</li>
              <li><strong style={{ color: '#ffffff' }}>Local Business:</strong> Phoenix-owned and operated</li>
              <li><strong style={{ color: '#ffffff' }}>Fast Response:</strong> Average 25-minute arrival time</li>
              <li><strong style={{ color: '#ffffff' }}>Professional Service:</strong> Trained technicians who care about your vehicle</li>
              <li><strong style={{ color: '#ffffff' }}>24/7 Availability:</strong> We're here when you need us most</li>
            </ul>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Service Area</h2>
            <p style={{ color: '#b0b0c0', lineHeight: '1.8' }}>
              We proudly serve all of Phoenix and the surrounding metro area, including Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Avondale, Goodyear, and more. If you're in the greater Phoenix area, we can help.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/contact" style={{
              display: 'inline-block',
              marginTop: '1rem',
              marginRight: '1rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #ffd700 0%, #ffcc00 100%)',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700
            }}>
              Contact Us
            </a>
            <a href="/" style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700
            }}>
              Get Quote
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
