function PrivacyPolicy() {
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
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>

          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>Effective Date: January 8, 2026</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Information We Collect</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            When you use our service, we may collect the following information:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#b0b0c0' }}>
            <li>Location information (when you request a quote)</li>
            <li>Phone number (when you call us)</li>
            <li>Service request details</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>How We Use Your Information</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            We use your information solely to:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#b0b0c0' }}>
            <li>Provide car unlock services</li>
            <li>Calculate pricing based on distance</li>
            <li>Contact you regarding your service request</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Data Security</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            We implement reasonable security measures to protect your information. We do not sell or share your personal information with third parties.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ marginBottom: '2rem', color: '#b0b0c0' }}>
            If you have questions about this Privacy Policy, please call us at <a href="tel:6238664245" style={{ color: '#ffd700' }}>623-866-4245</a>
          </p>

          <a href="/" style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #ffd700 0%, #ffcc00 100%)',
            color: '#000000',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 700
          }}>
            Back to Home
          </a>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
