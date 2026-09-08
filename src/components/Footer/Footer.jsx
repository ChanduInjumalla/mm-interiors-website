import { Link } from 'react-router-dom';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';
import { businessInfo } from '../../data/businessInfo';
import './Footer.css';

/**
 * Footer — Dark, elegant, grouped links
 * Per Blueprint page 69: Brand, Home Interiors, Services, Projects, Resources, Contact
 * Bottom bar: Privacy, Terms, copyright, social links
 */

const PHONE = `+91${businessInfo.phone.primary}`;
const PHONE_SECONDARY = `+91${businessInfo.phone.secondary}`;
const WHATSAPP = businessInfo.whatsapp.number;
const EMAIL = businessInfo.email;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">MM</span>
              <span className="footer__logo-sub">Interiors</span>
            </Link>
            <p className="footer__tagline">
              Home interior designers in Hyderabad. Complete home interiors from design to execution.
            </p>
            <div className="footer__contact-links">
              <a 
                href={`tel:${PHONE}`} 
                className="footer__contact-link"
                onClick={trackPhoneClick}
              >
                📞 {PHONE.replace('+91', '+91 ')}
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP}`} 
                className="footer__contact-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Home Interiors */}
          <div className="footer__col">
            <h4 className="footer__heading">Home Interiors</h4>
            <ul className="footer__list">
              <li><Link to="/home-interiors-hyderabad">Full Home Interiors</Link></li>
              <li><Link to="/2bhk-interior-design-hyderabad">2BHK Interiors</Link></li>
              <li><Link to="/3bhk-interior-design-hyderabad">3BHK Interiors</Link></li>
              <li><Link to="/apartment-interiors-hyderabad">Apartment Interiors</Link></li>
              <li><Link to="/villa-interiors-hyderabad">Villa Interiors</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__list">
              <li><Link to="/modular-kitchen-design-hyderabad">Modular Kitchen</Link></li>
              <li><Link to="/wardrobe-design-hyderabad">Wardrobes</Link></li>
              <li><Link to="/living-room-interiors-hyderabad">Living Room</Link></li>
              <li><Link to="/bedroom-interiors-hyderabad">Bedroom</Link></li>
              <li><Link to="/false-ceiling-design-hyderabad">False Ceiling</Link></li>
              <li><Link to="/tv-unit-design-hyderabad">TV Unit</Link></li>
              <li><Link to="/wall-painting-interiors-hyderabad">Wall Finishes</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer__col">
            <h4 className="footer__heading">Projects</h4>
            <ul className="footer__list">
              <li><Link to="/interior-design-projects">Selected Projects</Link></li>
              <li><Link to="/before-after-home-interiors-hyderabad">Before & After Slider</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/inspiration">Style Quiz & Inspiration</Link></li>
              <li><Link to="/interior-design-reviews-hyderabad">Reviews</Link></li>
            </ul>
          </div>

          {/* Resources & Trust */}
          <div className="footer__col">
            <h4 className="footer__heading">Guides & Trust</h4>
            <ul className="footer__list">
              <li><Link to="/interior-design-cost-hyderabad">Cost Calculator</Link></li>
              <li><Link to="/interior-materials-hyderabad">Materials Guide</Link></li>
              <li><Link to="/quality-warranty-hyderabad">10-Year Warranty</Link></li>
              <li><Link to="/interior-design-process-hyderabad">Our Process</Link></li>
              <li><Link to="/interior-design-faq-hyderabad">Live FAQs</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__list">
              <li>
                <a href={`tel:${PHONE}`} onClick={trackPhoneClick}>
                  {businessInfo.phone.primaryFormatted}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_SECONDARY}`} onClick={trackPhoneClick}>
                  {businessInfo.phone.secondaryFormatted}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li className="footer__address">
                {businessInfo.address.full}
              </li>
              <li className="footer__hours">
                {businessInfo.hours.full}
              </li>
              <li>
                <Link to="/contact">Contact Page</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} MM Interiors. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer__divider">·</span>
            <Link to="/terms-and-conditions">Terms</Link>
            <span className="footer__divider">·</span>
            <Link to="/refund-cancellation">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
