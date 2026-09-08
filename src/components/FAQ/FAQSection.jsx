import { useState } from 'react';

/**
 * FAQSection — Accordion FAQ component
 * Reused on Homepage, FAQ page, and service pages with page-specific questions.
 */
export default function FAQSection({ faqs, title, description }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="section">
      <div className="container container--narrow">
        {title && (
          <div className="section-header section-header--center">
            <span className="overline">FAQs</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            <div className="divider divider--center"></div>
          </div>
        )}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
