/**
 * MM Interiors — Route Definitions
 * Source of truth: AntiGravity Master Implementation + SEO Map, Section 6
 * 
 * Every approved URL maps to its correct component.
 * Total: 62 URL-bearing entries + dynamic project detail + catch-all 404.
 */
import { lazy } from 'react';

// Core Pages
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage'));
const HomeInteriorsPage = lazy(() => import('./pages/HomeInteriors/HomeInteriorsPage'));

// Room/Service Pages
const ModularKitchenPage = lazy(() => import('./pages/ModularKitchen/ModularKitchenPage'));
const WardrobesPage = lazy(() => import('./pages/Wardrobes/WardrobesPage'));
const LivingRoomPage = lazy(() => import('./pages/LivingRoom/LivingRoomPage'));
const MasterBedroomPage = lazy(() => import('./pages/MasterBedroom/MasterBedroomPage'));
const BedroomPage = lazy(() => import('./pages/Bedroom/BedroomPage'));
const KidsRoomPage = lazy(() => import('./pages/KidsRoom/KidsRoomPage'));
const PoojaRoomPage = lazy(() => import('./pages/PoojaRoom/PoojaRoomPage'));
const DiningRoomPage = lazy(() => import('./pages/DiningRoom/DiningRoomPage'));
const BathroomPage = lazy(() => import('./pages/Bathroom/BathroomPage'));
const HomeOfficePage = lazy(() => import('./pages/HomeOffice/HomeOfficePage'));
const FoyerPage = lazy(() => import('./pages/Foyer/FoyerPage'));
const BalconyPage = lazy(() => import('./pages/Balcony/BalconyPage'));
const StaircasePage = lazy(() => import('./pages/Staircase/StaircasePage'));
const FalseCeilingPage = lazy(() => import('./pages/FalseCeiling/FalseCeilingPage'));
const LightingPage = lazy(() => import('./pages/Lighting/LightingPage'));
const TVUnitPage = lazy(() => import('./pages/TVUnit/TVUnitPage'));
const WallPanellingPage = lazy(() => import('./pages/WallPanelling/WallPanellingPage'));
const WallpaperPage = lazy(() => import('./pages/Wallpaper/WallpaperPage'));
const WallPanels3DPage = lazy(() => import('./pages/WallPanels3D/WallPanels3DPage'));
const WallFinishesPage = lazy(() => import('./pages/WallFinishes/WallFinishesPage'));
const FlooringPage = lazy(() => import('./pages/Flooring/FlooringPage'));
const CurtainsBlindsPage = lazy(() => import('./pages/CurtainsBlinds/CurtainsBlindsPage'));
const FurniturePage = lazy(() => import('./pages/Furniture/FurniturePage'));
const ElectricalPage = lazy(() => import('./pages/Electrical/ElectricalPage'));
const PlumbingPage = lazy(() => import('./pages/Plumbing/PlumbingPage'));
const RenovationPage = lazy(() => import('./pages/Renovation/RenovationPage'));

// BHK / Property Pages
const TwoBHKPage = lazy(() => import('./pages/2BHK/TwoBHKPage'));
const ThreeBHKPage = lazy(() => import('./pages/3BHK/ThreeBHKPage'));
const FourBHKVillaPage = lazy(() => import('./pages/4BHKVilla/FourBHKVillaPage'));
const ApartmentPage = lazy(() => import('./pages/Apartment/ApartmentPage'));
const VillaPage = lazy(() => import('./pages/Villa/VillaPage'));
const DuplexPage = lazy(() => import('./pages/Duplex/DuplexPage'));

// Style Pages
const ModernPage = lazy(() => import('./pages/Styles/Modern/ModernPage'));
const ContemporaryPage = lazy(() => import('./pages/Styles/Contemporary/ContemporaryPage'));
const MinimalistPage = lazy(() => import('./pages/Styles/Minimalist/MinimalistPage'));
const TraditionalPage = lazy(() => import('./pages/Styles/Traditional/TraditionalPage'));
const AffordablePage = lazy(() => import('./pages/Styles/Affordable/AffordablePage'));
const LuxuryPage = lazy(() => import('./pages/Styles/Luxury/LuxuryPage'));

// Cost / Process / Trust Pages
const CostGuidePage = lazy(() => import('./pages/Cost/CostGuidePage'));
const TwoBHKCostPage = lazy(() => import('./pages/Cost/2BHK/TwoBHKCostPage'));
const ThreeBHKCostPage = lazy(() => import('./pages/Cost/3BHK/ThreeBHKCostPage'));
const ProcessPage = lazy(() => import('./pages/Process/ProcessPage'));
const MaterialsPage = lazy(() => import('./pages/Materials/MaterialsPage'));
const QualityWarrantyPage = lazy(() => import('./pages/QualityWarranty/QualityWarrantyPage'));

// Project / Content Pages
const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/Projects/ProjectDetailPage'));
const GalleryPage = lazy(() => import('./pages/Gallery/GalleryPage'));
const BeforeAfterPage = lazy(() => import('./pages/BeforeAfter/BeforeAfterPage'));
const TestimonialsPage = lazy(() => import('./pages/Testimonials/TestimonialsPage'));
const FAQPage = lazy(() => import('./pages/FAQ/FAQPage'));
const InspirationPage = lazy(() => import('./pages/Inspiration/InspirationPage'));
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));
const GetQuotePage = lazy(() => import('./pages/GetQuote/GetQuotePage'));

// Legal / Utility Pages
const PrivacyPolicyPage = lazy(() => import('./pages/Legal/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/Legal/TermsPage'));
const RefundCancellationPage = lazy(() => import('./pages/Legal/RefundCancellationPage'));
const ThankYouPage = lazy(() => import('./pages/Utility/ThankYouPage'));
const NotFoundPage = lazy(() => import('./pages/Utility/NotFoundPage'));

export const routes = [
  // Core
  { path: '/', element: HomePage },
  { path: '/about', element: AboutPage },
  { path: '/services', element: ServicesPage },
  { path: '/home-interiors-hyderabad', element: HomeInteriorsPage },

  // Room/Service
  { path: '/modular-kitchen-design-hyderabad', element: ModularKitchenPage },
  { path: '/wardrobe-design-hyderabad', element: WardrobesPage },
  { path: '/living-room-interiors-hyderabad', element: LivingRoomPage },
  { path: '/master-bedroom-interiors-hyderabad', element: MasterBedroomPage },
  { path: '/bedroom-interiors-hyderabad', element: BedroomPage },
  { path: '/kids-room-interiors-hyderabad', element: KidsRoomPage },
  { path: '/pooja-room-interiors-hyderabad', element: PoojaRoomPage },
  { path: '/dining-room-interiors-hyderabad', element: DiningRoomPage },
  { path: '/bathroom-interiors-hyderabad', element: BathroomPage },
  { path: '/home-office-interiors-hyderabad', element: HomeOfficePage },
  { path: '/foyer-design-hyderabad', element: FoyerPage },
  { path: '/balcony-interiors-hyderabad', element: BalconyPage },
  { path: '/staircase-interiors-hyderabad', element: StaircasePage },
  { path: '/false-ceiling-design-hyderabad', element: FalseCeilingPage },
  { path: '/interior-lighting-design-hyderabad', element: LightingPage },
  { path: '/tv-unit-design-hyderabad', element: TVUnitPage },
  { path: '/wall-paneling-design-hyderabad', element: WallPanellingPage },
  { path: '/wallpaper-design-installation-hyderabad', element: WallpaperPage },
  { path: '/3d-wall-panels-hyderabad', element: WallPanels3DPage },
  { path: '/wall-painting-interiors-hyderabad', element: WallFinishesPage },
  { path: '/flooring-interiors-hyderabad', element: FlooringPage },
  { path: '/curtains-blinds-hyderabad', element: CurtainsBlindsPage },
  { path: '/custom-furniture-hyderabad', element: FurniturePage },
  { path: '/interior-electrical-work-hyderabad', element: ElectricalPage },
  { path: '/interior-plumbing-work-hyderabad', element: PlumbingPage },
  { path: '/home-renovation-hyderabad', element: RenovationPage },

  // BHK / Property
  { path: '/2bhk-interior-design-hyderabad', element: TwoBHKPage },
  { path: '/3bhk-interior-design-hyderabad', element: ThreeBHKPage },
  { path: '/4bhk-villa-interiors-hyderabad', element: FourBHKVillaPage },
  { path: '/apartment-interiors-hyderabad', element: ApartmentPage },
  { path: '/villa-interiors-hyderabad', element: VillaPage },
  { path: '/duplex-interiors-hyderabad', element: DuplexPage },

  // Styles
  { path: '/modern-interiors-hyderabad', element: ModernPage },
  { path: '/contemporary-interiors-hyderabad', element: ContemporaryPage },
  { path: '/minimalist-interiors-hyderabad', element: MinimalistPage },
  { path: '/traditional-interiors-hyderabad', element: TraditionalPage },
  { path: '/affordable-home-interiors-hyderabad', element: AffordablePage },
  { path: '/luxury-home-interiors-hyderabad', element: LuxuryPage },

  // Cost / Process / Trust
  { path: '/interior-design-cost-hyderabad', element: CostGuidePage },
  { path: '/2bhk-interior-design-cost-hyderabad', element: TwoBHKCostPage },
  { path: '/3bhk-interior-design-cost-hyderabad', element: ThreeBHKCostPage },
  { path: '/interior-design-process-hyderabad', element: ProcessPage },
  { path: '/interior-materials-hyderabad', element: MaterialsPage },
  { path: '/quality-warranty-hyderabad', element: QualityWarrantyPage },

  // Project / Content
  { path: '/interior-design-projects', element: ProjectsPage },
  { path: '/projects/:slug', element: ProjectDetailPage },
  { path: '/gallery', element: GalleryPage },
  { path: '/before-after-interiors-hyderabad', element: BeforeAfterPage },
  { path: '/interior-design-reviews-hyderabad', element: TestimonialsPage },
  { path: '/interior-design-faq-hyderabad', element: FAQPage },
  { path: '/interior-design-inspiration-hyderabad', element: InspirationPage },
  { path: '/blog', element: BlogPage },
  { path: '/contact', element: ContactPage },
  { path: '/get-free-quote', element: GetQuotePage },

  // Legal / Utility
  { path: '/privacy-policy', element: PrivacyPolicyPage },
  { path: '/terms-and-conditions', element: TermsPage },
  { path: '/refund-cancellation', element: RefundCancellationPage },
  { path: '/thank-you', element: ThankYouPage },

  // 404 catch-all — must be last
  { path: '*', element: NotFoundPage },
];
