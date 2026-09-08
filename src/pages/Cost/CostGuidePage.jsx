import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import CostCalculator from '../../components/CostCalculator/CostCalculator';
import { getFaqsByCategory } from '../../data/faqs';

export default function CostGuidePage() {
  const faqs = getFaqsByCategory('cost');
  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Cost Guide' }]} />
      </div>

      <section className="section">
        <div className="container">
          <CostCalculator />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <span className="overline">Understanding Cost</span>
          <h2>What Affects Interior Design Cost?</h2>
          <div className="divider"></div>
          <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)' }}>
            Interior design cost is not a single number. It depends on multiple factors that are specific to your home, scope and choices. Understanding these factors helps you plan your budget effectively and make informed trade-off decisions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-xl)', marginTop: 'var(--space-3xl)' }}>
            {[
              { title: 'Home Size (BHK)', desc: 'A 2BHK has fewer rooms and less scope than a 3BHK or 4BHK. More rooms = more materials, more labor, more cost.' },
              { title: 'Scope of Work', desc: 'Full home interiors cost more than individual rooms. The scope of each room also varies — a kitchen with a tall unit costs more than one without.' },
              { title: 'Material Selection', desc: 'Laminate vs. acrylic vs. PU finish. MR plywood vs. BWR plywood. Each material choice affects durability and cost.' },
              { title: 'Hardware Quality', desc: 'Soft-close hinges, telescopic channels, lift-up systems — quality hardware adds to kitchen and wardrobe cost but improves daily use.' },
              { title: 'Civil & Electrical', desc: 'Flooring changes, wall demolition, electrical rewiring, plumbing modifications — these civil works add to the overall project budget.' },
              { title: 'Design Complexity', desc: 'Custom curved elements, detailed ceiling work, imported finishes and non-standard designs require more time and skill.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>{item.title}</h4>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-text-light)', marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="overline">By Home Type</span>
          <h2>Cost by BHK</h2>
          <div className="divider divider--center"></div>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-2xl)' }}>
            <Link to="/2bhk-interior-design-cost-hyderabad" className="btn btn--primary">2BHK Cost</Link>
            <Link to="/3bhk-interior-design-cost-hyderabad" className="btn btn--primary">3BHK Cost</Link>
            <Link to="/interior-design-process-hyderabad" className="btn btn--secondary">Our Process</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Cost FAQs" />

      <CTASection
        title="Get a Project Estimate"
        description="Share your home details and we will help you understand the likely scope and cost for your project."
        ctaText="Request a Project Estimate"
        variant="dark"
      />
    </>
  );
}
