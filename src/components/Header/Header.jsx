import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';
import { businessInfo } from '../../data/businessInfo';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

/**
 * Header — Premium architectural navigation
 * 
 * Desktop: Logo left | Nav center | CTAs right
 * Services mega menu: 2-column layout
 * Sticky with scroll transition
 * Mobile: hamburger with accordion
 */

const PHONE = `+91${businessInfo.phone.primary}`;
const WHATSAPP_URL = businessInfo.whatsapp.messageLink();

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    megaMenu: true,
    columns: [
      {
        heading: 'Core Services',
        items: [
          { label: 'Complete Home Interiors', path: '/home-interiors-hyderabad' },
          { label: 'Modular Kitchen', path: '/modular-kitchen-design-hyderabad' },
          { label: 'Bedroom Interiors', path: '/bedroom-interiors-hyderabad' },
          { label: 'Living Room Interiors', path: '/living-room-interiors-hyderabad' },
          { label: 'Wardrobe Design', path: '/wardrobe-design-hyderabad' },
          { label: 'Master Bedroom', path: '/master-bedroom-interiors-hyderabad' },
          { label: 'Kids Room', path: '/kids-room-interiors-hyderabad' },
          { label: 'Pooja Room', path: '/pooja-room-interiors-hyderabad' },
        ],
      },
      {
        heading: 'Finishes & Systems',
        items: [
          { label: 'False Ceiling', path: '/false-ceiling-design-hyderabad' },
          { label: 'Wallpaper', path: '/wallpaper-design-installation-hyderabad' },
          { label: 'Wall Panelling', path: '/wall-paneling-design-hyderabad' },
          { label: 'TV Unit Design', path: '/tv-unit-design-hyderabad' },
          { label: '3D Wall Panels', path: '/3d-wall-panels-hyderabad' },
          { label: 'Interior Lighting', path: '/interior-lighting-design-hyderabad' },
          { label: 'Home Renovation', path: '/home-renovation-hyderabad' },
        ],
      },
    ],
  },
  { label: 'Projects', path: '/interior-design-projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  {
    label: 'More',
    path: '#',
    megaMenu: true,
    footerLink: { label: 'Explore All Collections & Guides →', path: '/interior-materials-hyderabad' },
    columns: [
      {
        heading: 'Showcase & Inspiration',
        items: [
          { label: 'Interior Design Projects', path: '/interior-design-projects' },
          { label: 'Before & After Slider', path: '/before-after-home-interiors-hyderabad' },
          { label: 'Photo Gallery', path: '/gallery' },
          { label: 'Style Quiz & Inspiration', path: '/inspiration' },
          { label: 'Customer Reviews', path: '/interior-design-reviews-hyderabad' },
        ],
      },
      {
        heading: 'Guides, Cost & Warranty',
        items: [
          { label: 'Cost Estimator & Guide', path: '/interior-design-cost-hyderabad' },
          { label: 'Materials & Ply Guide', path: '/interior-materials-hyderabad' },
          { label: 'Quality & 10-Year Warranty', path: '/quality-warranty-hyderabad' },
          { label: 'Our 8-Step Process', path: '/interior-design-process-hyderabad' },
          { label: 'Instant Search FAQs', path: '/interior-design-faq-hyderabad' },
          { label: 'Blog & Design Tips', path: '/blog' },
        ],
      },
    ],
  },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const dropdownTimeout = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleMouseEnter = (index) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="header__inner">
        {/* Brand Logo */}
        <Link to="/" className="header__logo" aria-label="MM Interiors Home">
          <span className="header__logo-content">
            <span className="header__logo-name">
              <span className="header__logo-mm">MM</span>
              <span className="header__logo-sep" />
              <span className="header__logo-word">Interiors</span>
            </span>
            <span className="header__logo-tagline">Design · Build · Deliver</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className={`header__nav-item ${(item.megaMenu || item.dropdown) ? 'has-dropdown' : ''}`}
                onMouseEnter={() => (item.megaMenu || item.dropdown) && handleMouseEnter(index)}
                onMouseLeave={() => (item.megaMenu || item.dropdown) && handleMouseLeave()}
              >
                <Link
                  to={item.path}
                  className={`header__nav-link ${location.pathname === item.path ? 'is-active' : ''}`}
                  onClick={(e) => item.path === '#' && e.preventDefault()}
                >
                  {item.label}
                  {(item.megaMenu || item.dropdown) && (
                    <svg className="header__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>

                {/* Mega Menu (Services & More) */}
                {item.megaMenu && activeDropdown === index && (
                  <div className={`header__mega ${item.label === 'More' ? 'header__mega--more' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="header__mega-inner">
                      {item.columns.map((col) => (
                        <div key={col.heading} className="header__mega-col">
                          <h4 className="header__mega-heading">{col.heading}</h4>
                          <ul className="header__mega-list">
                            {col.items.map((sub) => (
                              <li key={sub.path}>
                                <Link to={sub.path} className="header__mega-link">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="header__mega-footer">
                        <Link to={item.footerLink?.path || "/services"} className="header__mega-all">
                          {item.footerLink?.label || "View All Services →"}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Simple Dropdown (More) */}
                {item.dropdown && activeDropdown === index && (
                  <div className="header__dropdown"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="header__dropdown-list">
                      {item.dropdown.map((sub) => (
                        <li key={sub.path}>
                          <Link to={sub.path} className="header__dropdown-link">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="header__ctas">
          <a
            href={`tel:${PHONE}`}
            className="header__cta-btn header__cta-btn--secondary"
            onClick={trackPhoneClick}
          >
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            className="header__cta-btn header__cta-btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
          >
            WhatsApp
          </a>
          <Link
            to="/get-free-quote"
            className="header__cta-btn header__cta-btn--primary"
            onClick={() => trackCTAClick('Get Quote - Header')}
          >
            Get Quote
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`header__hamburger ${isMobileOpen ? 'is-open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile ${isMobileOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <ul className="header__mobile-list">
            {navItems.map((item, index) => (
              <li key={item.label} className="header__mobile-item">
                <div className="header__mobile-row">
                  <Link
                    to={item.path}
                    className={`header__mobile-link ${location.pathname === item.path ? 'is-active' : ''}`}
                    onClick={(e) => {
                      if (item.path === '#') e.preventDefault();
                      else setIsMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                  {(item.megaMenu || item.dropdown) && (
                    <button
                      className={`header__mobile-toggle ${activeDropdown === index ? 'is-open' : ''}`}
                      onClick={() => toggleMobileDropdown(index)}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile submenu */}
                {activeDropdown === index && item.megaMenu && (
                  <div className="header__mobile-mega">
                    {item.columns.map((col) => (
                      <div key={col.heading} className="header__mobile-col">
                        <span className="header__mobile-col-title">{col.heading}</span>
                        <ul className="header__mobile-sub">
                          {col.items.map((sub) => (
                            <li key={sub.path}>
                              <Link
                                to={sub.path}
                                className="header__mobile-sub-link"
                                onClick={() => setIsMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.footerLink && (
                      <div className="header__mobile-sub-footer">
                        <Link
                          to={item.footerLink.path}
                          className="header__mobile-sub-link header__mobile-sub-link--all"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {item.footerLink.label}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                {activeDropdown === index && item.dropdown && (
                  <ul className="header__mobile-sub">
                    {item.dropdown.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          to={sub.path}
                          className="header__mobile-sub-link"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile CTAs */}
          <div className="header__mobile-ctas">
            <a href={`tel:${PHONE}`} className="header__mobile-cta" onClick={trackPhoneClick}>
              📞 Call Now
            </a>
            <a href={WHATSAPP_URL} className="header__mobile-cta" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
              💬 WhatsApp
            </a>
            <Link to="/get-free-quote" className="header__mobile-cta header__mobile-cta--primary" onClick={() => setIsMobileOpen(false)}>
              Get Free Quote
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
