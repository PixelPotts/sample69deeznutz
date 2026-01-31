import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './PrivacyPolicy.tsx'
import TermsOfService from './TermsOfService.tsx'
import Dispatch from './Dispatch.tsx'
import Pricing from './Pricing.tsx'
import ServiceAreas from './ServiceAreas.tsx'
import About from './About.tsx'
import Contact from './Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
