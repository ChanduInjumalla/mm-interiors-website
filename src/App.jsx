import { Suspense, useEffect, Component } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileBottomBar from './components/MobileBottomBar/MobileBottomBar';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';
import { routes } from './routes';
import { initAnalytics, trackPageView } from './utils/analytics';
import { getSeoData } from './utils/seo';
import './styles/global.css';
import './styles/mobile-responsive.css';

/**
 * ErrorBoundary — Catches runtime errors and displays fallback UI
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          marginTop: '72px',
        }}>
          <h1 style={{ color: '#C62828', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#6B6B6B', marginBottom: '1rem' }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <pre style={{
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '1rem',
            background: '#f5f5f5',
            borderRadius: '8px',
            fontSize: '0.75rem',
            overflow: 'auto',
          }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = '/'; }}
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.75rem',
              background: '#1B3A5C',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Go to Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * ScrollToTop — Scroll to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * PageTracker — Track page views on route change
 */
function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    const seo = getSeoData(location.pathname);
    trackPageView(location.pathname, seo.title);
  }, [location.pathname]);
  return null;
}

/**
 * Loading fallback for lazy-loaded pages
 */
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      marginTop: '72px',
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        border: '3px solid #E5E2DC',
        borderTopColor: '#1B3A5C',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/**
 * AppLayout — Global shell with Header, Footer, MobileBottomBar
 */
function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <PageTracker />
      <Header />
      <main id="main-content">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {routes.map(({ path, element: Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </>
  );
}

export default function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
