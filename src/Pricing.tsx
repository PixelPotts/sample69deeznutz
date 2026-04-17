function Pricing() {
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
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Our Pricing</h1>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '2px solid #ffd700',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.25rem', color: '#ffd700', marginBottom: '1rem' }}>Distance-Based Pricing</h2>
            <p style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              $20 <span style={{ fontSize: '1.5rem', color: '#b0b0c0' }}>base service fee</span>
            </p>
            <p style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1rem' }}>
              + $1<span style={{ fontSize: '1rem', color: '#b0b0c0' }}> per mile from our location</span>
            </p>
            <p style={{ color: '#8888a0', fontSize: '0.875rem', marginTop: '1rem' }}>
              Based on distance from 8607 W Wilshire Dr, Phoenix, AZ 85037
            </p>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Example Pricing</h2>
            <p style={{ color: '#8888a0', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Actual price calculated based on your exact location. Use our online calculator for precise quote.
            </p>
            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #3a3a4e' }}>
              <p style={{ color: '#b0b0c0', marginBottom: '0.25rem' }}>5 miles away</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#27ae60' }}>$25.00</p>
            </div>
            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #3a3a4e' }}>
              <p style={{ color: '#b0b0c0', marginBottom: '0.25rem' }}>10 miles away</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#27ae60' }}>$30.00</p>
            </div>
            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #3a3a4e' }}>
              <p style={{ color: '#b0b0c0', marginBottom: '0.25rem' }}>15 miles away</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#27ae60' }}>$35.00</p>
            </div>
            <div>
              <p style={{ color: '#b0b0c0', marginBottom: '0.25rem' }}>20 miles away</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#27ae60' }}>$40.00</p>
            </div>
          </div>

          <div style={{
            background: '#2a2a3e',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid #3a3a4e'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What's Included</h2>
            <ul style={{ marginLeft: '1.5rem', color: '#b0b0c0', lineHeight: '2' }}>
              <li>Professional car unlock service</li>
              <li>Licensed & insured technician</li>
              <li>Careful, damage-free techniques</li>
              <li>All vehicle makes and models</li>
              <li>24/7 availability</li>
              <li>Efficient response time</li>
            </ul>
          </div>

          <div style={{
            background: '#1a2e1f',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
            border: '1px solid #27ae60'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: '#27ae60', marginBottom: '0.5rem' }}>✓ NO HIDDEN FEES</h3>
            <p style={{ color: '#b0b0c0' }}>
              The price you see is the price you pay. No surprise charges, no extra fees.
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
              Get a Quote
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

export default Pricing
