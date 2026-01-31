import { useState, useRef, useEffect } from 'react'
import './App.css'

const HOME_BASE = '8607 W Wilshire Dr, Phoenix, AZ 85037'
const BASE_PRICE = 20
const PRICE_PER_MILE = 1

declare global {
  interface Window {
    google: any
    gtag: any
  }
}

// Google Ads conversion tracking helper
const trackConversion = (action: string, conversionLabel?: string) => {
  if (typeof window.gtag !== 'undefined') {
    if (conversionLabel) {
      // Track specific conversion with label
      window.gtag('event', 'conversion', {
        send_to: `AW-16570409431/${conversionLabel}`
      })
    }
    // Also track as custom event
    window.gtag('event', action, {
      event_category: 'engagement',
      event_label: action
    })
  }
}

function App() {
  const [location, setLocation] = useState('')
  const [distance, setDistance] = useState<number | null>(null)
  const [price, setPrice] = useState(65)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const [isValidAddress, setIsValidAddress] = useState(false)
  const autocompleteRef = useRef<any>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const lastEscapeTime = useRef<number>(0)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        const now = Date.now()
        if (now - lastEscapeTime.current < 500) {
          setMenuOpen(false)
        }
        lastEscapeTime.current = now
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  useEffect(() => {
    const initAutocomplete = () => {
      if (window.google && inputRef.current) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'geometry']
        })

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current?.getPlace()
          if (place?.formatted_address) {
            setLocation(place.formatted_address)
            setIsValidAddress(true)
          }
        })
      }
    }

    if (window.google) {
      initAutocomplete()
    } else {
      const checkGoogle = setInterval(() => {
        if (window.google) {
          initAutocomplete()
          clearInterval(checkGoogle)
        }
      }, 100)

      return () => clearInterval(checkGoogle)
    }
  }, [])

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }

    setIsGettingLocation(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        if (!window.google) {
          setIsGettingLocation(false)
          return
        }

        const geocoder = new window.google.maps.Geocoder()
        const latlng = { lat: latitude, lng: longitude }

        geocoder.geocode({ location: latlng }, (results: any, status: string) => {
          setIsGettingLocation(false)

          if (status === 'OK' && results[0]) {
            setLocation(results[0].formatted_address)
            setIsValidAddress(true)
          } else {
            alert('Could not get address from current location')
          }
        })
      },
      (error) => {
        setIsGettingLocation(false)
        alert('Unable to retrieve your location: ' + error.message)
      }
    )
  }

  const calculateDistance = async () => {
    if (!location || !window.google) return

    setIsCalculating(true)

    const service = new window.google.maps.DistanceMatrixService()

    service.getDistanceMatrix(
      {
        origins: [HOME_BASE],
        destinations: [location],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      },
      (response: any, status: string) => {
        setIsCalculating(false)

        if (status === 'OK' && response) {
          const result = response.rows[0]?.elements[0]
          if (result?.status === 'OK' && result.distance) {
            const miles = result.distance.value / 1609.34
            setDistance(miles)

            const calculatedPrice = BASE_PRICE + (miles * PRICE_PER_MILE)
            setPrice(Math.round(calculatedPrice))
            setShowQuote(true)
            trackConversion('quote_requested', 'WCShCK3D994bENfDsd09')
          }
        } else {
          setPrice(65)
          setShowQuote(true)
          trackConversion('quote_requested', 'WCShCK3D994bENfDsd09')
        }
      }
    )
  }

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
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="menu-popover">
          <button className="menu-close" onClick={() => setMenuOpen(false)}>×</button>
          <nav className="menu-nav">
            <a href="/" className="menu-item">Home</a>
            <a href="/about" className="menu-item">About Us</a>
            <a href="/pricing" className="menu-item">Pricing</a>
            <a href="/service-areas" className="menu-item">Service Areas</a>
            <a href="/contact" className="menu-item">Contact</a>
          </nav>
        </div>
      )}

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <div className="car-illustration">
              <img src="/phx-unlock-logo.png" alt="PHX Unlock Services Logo" className="hero-logo" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">PHX Unlock Services, LLC</h1>
              <p className="hero-subtitle">
                Licensed Car Lockout Service<br/>
                Serving Phoenix Metro Area<br/>
                📞 623-866-4245
              </p>
            </div>
          </div>
        </section>

        {!showQuote && (
          <section className="quote-form">
            <div className="input-wrapper">
            <svg className="location-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <input
              ref={inputRef}
              type="text"
              className={`location-input ${isValidAddress ? 'valid-address' : ''}`}
              placeholder="Enter address OR click locate -->"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
                if (e.target.value === '') setIsValidAddress(false)
              }}
              onKeyPress={(e) => e.key === 'Enter' && calculateDistance()}
            />
            <button
              className="gps-button"
              onClick={getCurrentLocation}
              disabled={isGettingLocation}
              title="Use current location"
            >
              {isGettingLocation ? (
                <svg className="spinner" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
              )}
            </button>
          </div>
          <button
            className="quote-button"
            onClick={calculateDistance}
            disabled={!location || isCalculating}
          >
            {isCalculating ? 'CALCULATING...' : 'GET QUOTE'}
          </button>
        </section>
        )}

        {showQuote && (
          <section className="quote-result">
            <button className="back-button" onClick={() => window.location.reload()}>
              <svg className="chevron-left" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <div className="quote-card">
              <p className="price-label">TOTAL COST</p>
              <p className="price">${price}.00</p>
              {distance !== null && (
                <>
                  <p className="distance-info">
                    ARRIVAL IN <span className="arrival-time">{(() => {
                      const totalMins = Math.max(15, Math.round((distance / 40) * 60));
                      const hours = Math.floor(totalMins / 60);
                      const mins = totalMins % 60;
                      if (hours > 0) {
                        return mins > 0 ? `${hours} HR ${mins} MINUTES` : `${hours} HR`;
                      }
                      return `${mins} MINUTES`;
                    })()}</span>
                  </p>
                  <a href="tel:6238664245" className="confirm-text" onClick={() => trackConversion('phone_call_click', 'WCShCK3D994bENfDsd09')}>CALL TO CONFIRM</a>
                </>
              )}
            </div>
          </section>
        )}

        <div className={`call-section ${showQuote ? 'fixed-bottom' : ''}`}>
          {!showQuote && <p className="dispatch-label">OR CALL LIVE DISPATCH</p>}
          <a href="tel:6238664245" className="call-button" onClick={() => trackConversion('phone_call_click', 'WCShCK3D994bENfDsd09')}>
            <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            623-866-4245
          </a>
          <div className="legal-links">
            <a href="/privacy" className="legal-link">Privacy Policy</a>
            <span className="legal-separator">•</span>
            <a href="/terms" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="version">v0.0.1</div>
      </footer>
    </div>
  )
}

export default App
