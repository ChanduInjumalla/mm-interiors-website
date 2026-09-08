import { useState, useMemo } from 'react';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import { getAllFaqs } from '../../data/faqs';
import './FAQPage.css';

const CATEGORY_TABS = [
  { key: 'all', label: 'All Questions' },
  { key: 'cost', label: 'Cost & Pricing' },
  { key: 'materials', label: 'Materials & Ply' },
  { key: 'process', label: 'Timeline & Process' },
  { key: 'kitchen', label: 'Kitchen & Wardrobes' },
];

export default function FAQPage() {
  const allFaqs = useMemo(() => getAllFaqs(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndices, setOpenIndices] = useState([0]); // First FAQ open by default

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter(faq => {
      const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
      if (!searchQuery.trim()) return matchesCat;
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        faq.question.toLowerCase().includes(q) || 
        faq.answer.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [allFaqs, activeCategory, searchQuery]);

  const toggleFAQ = (index) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'FAQs' }]} />
      </div>

      <section className="section">
        <div className="container container--narrow">
          <div className="section-header section-header--center">
            <span className="overline">Instant Answers</span>
            <h2>Frequently Asked Questions</h2>
            <div className="divider divider--center"></div>
            <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to know about pricing, materials, execution timelines, and warranties in Hyderabad.
            </p>
          </div>

          {/* Search Box */}
          <div className="faq-search-box">
            <span className="faq-search-icon">🔍</span>
            <input
              type="text"
              className="faq-search-input"
              placeholder="Search by keyword (e.g. plywood, cost, 45 days, modular kitchen)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="faq-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="faq-tabs">
            {CATEGORY_TABS.map(tab => (
              <button
                key={tab.key}
                type="button"
                className={`faq-tab ${activeCategory === tab.key ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results Info */}
          <div className="faq-results-count">
            Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
            {searchQuery && ` for "${searchQuery}"`}
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="faq-list">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndices.includes(index) || searchQuery.trim().length > 0;
                return (
                  <div
                    key={index}
                    className={`faq-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="faq-empty">
              <h4>No matching questions found</h4>
              <p>Try searching for a different keyword or contact our design team directly.</p>
              <button type="button" className="btn btn--secondary" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Have a Specific Question?"
        description="Our principal designer is available to answer all your home layout and budget questions."
        ctaText="Ask via WhatsApp"
        ctaLink="/contact"
        variant="dark"
      />
    </>
  );
}
