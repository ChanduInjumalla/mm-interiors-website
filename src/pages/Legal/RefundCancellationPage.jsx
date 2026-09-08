import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function RefundCancellationPage() {
  return (
    <>
      <SEOHead />
      <div style={{ marginTop: 'var(--header-height)' }} className="container"><Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Refund & Cancellation' }]} /></div>
      <section className="section">
        <div className="container container--narrow">
          <h1>Refund & Cancellation Policy</h1>
          <div className="divider"></div>
          {/* [REPLACE_WITH_VERIFIED_LEGAL_CONTENT] */}
          <p style={{ color: 'var(--color-text-light)' }}>This policy outlines our approach to refunds and cancellations for interior design services. Specific terms are discussed and agreed upon as part of your project agreement.</p>
          <p style={{ color: 'var(--color-text-light)' }}>For questions about refunds or cancellations, please contact us directly.</p>
        </div>
      </section>
    </>
  );
}
