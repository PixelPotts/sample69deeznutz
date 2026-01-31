function TermsOfService() {
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
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Terms of Service</h1>

          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>Effective Date: January 8, 2026</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Services Provided</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            PHX Unlock Services provides professional car lockout services in the Phoenix metropolitan area. We strive to provide fast, affordable, and reliable service 24/7.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Pricing</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            Pricing is calculated as a $20 base fee plus $1 per mile from our location (8607 W Wilshire Dr, Phoenix, AZ 85037). Quotes provided through this website are estimates and must be confirmed by phone.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Service Guarantee</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            We guarantee:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#b0b0c0' }}>
            <li>Licensed and insured technicians</li>
            <li>No hidden fees beyond the quoted price</li>
            <li>Professional service with minimal wait times</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Liability</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            While we take every precaution to prevent damage to your vehicle, we are not responsible for pre-existing damage or issues. We carry insurance for covered incidents.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Payment</h2>
          <p style={{ marginBottom: '1rem', color: '#b0b0c0' }}>
            Payment is due upon completion of service. We accept cash, credit cards, and major debit cards.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Contact</h2>
          <p style={{ marginBottom: '2rem', color: '#b0b0c0' }}>
            For questions about these terms, call us at <a href="tel:6238664245" style={{ color: '#ffd700' }}>623-866-4245</a>
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

export default TermsOfService
