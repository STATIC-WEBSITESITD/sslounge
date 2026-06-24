import { Link } from 'react-router-dom'
import { imagePath } from '../assets/imagePath'
import { PHONE_DISPLAY, WHATSAPP_LINK } from '../constants/contact'

const Footer = () => {
  return (
    <footer>
      <div className="d-flex flex-column p-0">
        <div className="footer-content-banner">
          <div className="hero-container">
            <div className="footer-content-container">
              <div className="image-container">
                <img src={imagePath('logo.png')} alt="Logo" />
              </div>
              <p className="footer-description">
                Style & Shine Lounge by Samina Khan — Beauty. Fashion. Confidence. All in One Place.
                Where Beauty Meets Style & Your Confidence Shines Every Moment!
              </p>
              <p className="footer-description">
                <strong>Address:</strong> Shop No. 2A, Naman Habitat CHSL, CTS No. 647, J.P. Road, Opposite Pathare Prabhu Hall, Ambivali, Andheri West, Mumbai 400058.<br />
                <strong>Bookings & Enquiries:</strong>{' '}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <div className="d-flex flex-row gspace-0 align-items-center justify-content-center flex-wrap">
                <Link to="/" className="footer-link">
                  Home
                </Link>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
                <Link to="/services" className="footer-link">
                  Our Services
                </Link>
                <Link to="/blogs" className="footer-link">
                  Blogs
                </Link>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-social-container">
                <a
                  href="https://www.instagram.com/ssloungebysamina?utm_source=qr&igsh=aGVqYzl3ZDU4czV2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@ssloungebysamina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590945540990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="footer-copyright-container">
            <span className="copyright-text text-white">Copyright © {new Date().getFullYear()} Style & Shine Lounge by Samina Khan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
