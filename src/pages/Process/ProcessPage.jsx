import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import FAQSection from '../../components/FAQ/FAQSection';
import { getFaqsByCategory } from '../../data/faqs';
import './ProcessPage.css';

export default function ProcessPage() {
  const faqs = getFaqsByCategory('process');
  const steps = [
    { num: '01', title: 'Consultation', desc: 'We start with a conversation about your home — layout, family size, requirements, budget and timeline. If needed, we visit your site.' },
    { num: '02', title: 'Requirement Understanding', desc: 'We document your room-by-room requirements, storage needs, material preferences and any specific design ideas you have.' },
    { num: '03', title: 'Design Development', desc: 'We create layouts, 3D visualizations, material boards and detailed scope documents. You review and provide feedback.' },
    { num: '04', title: 'Material Selection', desc: 'We present material options — laminates, hardware, countertops, finishes — with samples so you can see and feel before choosing.' },
    { num: '05', title: 'Approval & Agreement', desc: 'Once the design and materials are finalized, we formalize the scope, timeline and cost before starting work.' },
    { num: '06', title: 'Manufacturing', desc: 'Kitchen cabinets, wardrobes, TV units and furniture are manufactured in our facility under quality control.' },
    { num: '07', title: 'Site Execution', desc: 'Civil work, electrical, painting, false ceiling and installations happen at your home with our team managing coordination.' },
    { num: '08', title: 'Quality Check & Handover', desc: 'Final inspection, touch-ups, cleaning and handover of your completed home interiors.' },
  ];

  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Our Process' }]} />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Step by Step</span>
            <h2>How Your Interior Project Works</h2>
            <p>A transparent, structured process so you know exactly what to expect at every stage.</p>
            <div className="divider divider--center"></div>
          </div>
          <div className="process-steps-grid">
            {steps.map(step => (
              <div key={step.num} className="process-step-card">
                <span className="process-step-card__num">{step.num}</span>
                <div className="process-step-card__content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Process FAQs" />

      <CTASection title="Start Your Interior Project" description="The first step is a conversation. Tell us about your home and we will guide you from there." ctaText="Book Consultation" variant="dark" />
    </>
  );
}
