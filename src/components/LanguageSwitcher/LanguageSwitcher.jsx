import { useState, useEffect, useRef } from 'react';
import './LanguageSwitcher.css';

export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', short: 'EN' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', short: 'తె' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी', flag: '🇮🇳', short: 'हि' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', short: 'த' },
];

export default function LanguageSwitcher({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef(null);

  // Read saved language from cookie/localStorage on mount
  useEffect(() => {
    try {
      const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
      if (match && match[1]) {
        setCurrentLang(match[1]);
      } else {
        const saved = localStorage.getItem('mm_selected_lang');
        if (saved) setCurrentLang(saved);
      }
    } catch {
      // fallback
    }

    // Initialize Google Translate script silently if not already loaded
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,te,hi,ta',
              autoDisplay: false,
            },
            'google_translate_hidden_element'
          );
        }
      };

      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    localStorage.setItem('mm_selected_lang', langCode);

    // Set Google Translate Cookie
    const hostname = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${hostname}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; domain=${hostname}; path=/;`;

    // Trigger select change in Google Translate widget
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // Reload if switching to/from English or initializing
      window.location.reload();
    }
  };

  const activeLanguage = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className={`lang-switcher ${className}`} ref={dropdownRef}>
      {/* Hidden container for Google Translate widget */}
      <div id="google_translate_hidden_element" style={{ display: 'none' }}></div>

      {/* Language Trigger Button */}
      <button
        type="button"
        className={`lang-switcher__btn ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="lang-switcher__globe">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </span>
        <span className="lang-switcher__current-name">{activeLanguage.native}</span>
        <svg className="lang-switcher__chevron" width="8" height="5" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <div className="lang-switcher__dropdown" role="menu">
          <div className="lang-switcher__header">Select Language</div>
          <ul className="lang-switcher__list">
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  className={`lang-switcher__option ${currentLang === lang.code ? 'is-active' : ''}`}
                  onClick={() => handleSelectLanguage(lang.code)}
                  role="menuitem"
                >
                  <span className="lang-switcher__option-flag">{lang.flag}</span>
                  <div className="lang-switcher__option-text">
                    <span className="lang-switcher__option-native">{lang.native}</span>
                    <span className="lang-switcher__option-en">{lang.name}</span>
                  </div>
                  {currentLang === lang.code && (
                    <span className="lang-switcher__check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8976A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
