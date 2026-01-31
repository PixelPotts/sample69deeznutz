function ServiceAreas() {
  const areas = [
    'Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Gilbert',
    'Glendale', 'Peoria', 'Surprise', 'Avondale', 'Goodyear', 'Buckeye',
    'Fountain Hills', 'Paradise Valley', 'Cave Creek', 'Anthem',
    'Sun City', 'Sun City West', 'Litchfield Park', 'Tolleson',
    'El Mirage', 'Youngtown', 'Guadalupe', 'Queen Creek'
  ]

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
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Service Areas</h1>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.5rem', color: '#ffd700', marginBottom: '1rem' }}>
              Serving All of Phoenix Metro
            </h2>
            <p style={{ color: '#b0b0c0', fontSize: '1.125rem' }}>
              Based in West Phoenix - Fast response across the entire valley
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Location</h3>
            <p style={{ color: '#b0b0c0', marginBottom: '0.5rem' }}>
              📍 8607 W Wilshire Dr, Phoenix, AZ 85037
            </p>
            <p style={{ color: '#8888a0', fontSize: '0.875rem' }}>
              Centrally located for fast service across the West Valley and beyond
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Cities We Serve</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '0.75rem'
            }}>
              {areas.map(area => (
                <div key={area} style={{
                  background: '#1a1a2e',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  textAlign: 'center',
                  color: '#ffffff',
                  fontSize: '0.875rem'
                }}>
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Response Times</h3>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.25rem' }}>West Valley (Glendale, Peoria, Surprise)</p>
              <p style={{ color: '#b0b0c0' }}>15-20 minutes average</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.25rem' }}>Central Phoenix</p>
              <p style={{ color: '#b0b0c0' }}>20-25 minutes average</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#ffd700', fontWeight: 700, marginBottom: '0.25rem' }}>East Valley (Scottsdale, Tempe, Mesa)</p>
              <p style={{ color: '#b0b0c0' }}>25-35 minutes average</p>
            </div>
            <div>
              <p style={{ color: '#8888a0', fontSize: '0.875rem', fontStyle: 'italic' }}>
                * Times may vary based on traffic and exact location
              </p>
            </div>
          </div>

          <div style={{
            background: '#1a2e1f',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
            border: '1px solid #27ae60',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.125rem', color: '#27ae60', fontWeight: 700, marginBottom: '0.5rem' }}>
              ✓ Don't see your city?
            </p>
            <p style={{ color: '#b0b0c0' }}>
              Call us! We serve the entire Phoenix metro area and may be able to help.
            </p>
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
              fontWeight: 700,
              marginRight: '1rem'
            }}>
              Get Quote for Your Location
            </a>
            <a href="tel:6238664245" style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700
            }}>
              Call 623-866-4245
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ServiceAreas
