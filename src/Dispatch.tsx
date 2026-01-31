function Dispatch() {
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
        <div style={{ padding: '2rem 1.5rem', color: '#ffffff', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>24/7 Live Dispatch</h1>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <p style={{ fontSize: '1.125rem', color: '#b0b0c0', marginBottom: '2rem' }}>
              Call our live dispatch team now for immediate assistance
            </p>

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
              marginBottom: '2rem'
            }}>
              📞 623-866-4245
            </a>

            <p style={{ fontSize: '0.875rem', color: '#8888a0' }}>
              Available 24 hours a day, 7 days a week
            </p>
          </div>

          <div style={{ textAlign: 'left', color: '#b0b0c0', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1rem' }}>What to Expect</h2>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '2' }}>
              <li>Immediate answer from live dispatcher</li>
              <li>Instant quote based on your location</li>
              <li>Technician dispatched immediately</li>
              <li>Real-time ETA provided</li>
              <li>Text updates on arrival time</li>
            </ul>
          </div>

          <a href="/" style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
            color: '#000000',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 700
          }}>
            Get Online Quote
          </a>
        </div>
      </main>
    </div>
  )
}

export default Dispatch
