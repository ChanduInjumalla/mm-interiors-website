import { useParams, Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import { getProjectBySlug } from '../../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div style={{ marginTop: 'var(--header-height)', padding: 'var(--space-5xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Project Not Found</h1>
          <p style={{ color: 'var(--color-text-light)', marginTop: 'var(--space-md)' }}>This project does not exist or has been moved.</p>
          <Link to="/interior-design-projects" className="btn btn--primary" style={{ marginTop: 'var(--space-xl)' }}>View All Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead overrides={{ title: project.title + ' | MM Interiors', description: project.description }} />
      <div style={{ marginTop: 'var(--header-height)' }} className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Projects', path: '/interior-design-projects' }, { label: project.title }]} />
      </div>
      <section className="section">
        <div className="container container--narrow">
          <h1>{project.title}</h1>
          <p style={{ color: 'var(--color-text-light)' }}>{project.description}</p>
        </div>
      </section>
      <CTASection title="Start Your Own Project" ctaText="Get Free Consultation" variant="dark" />
    </>
  );
}
