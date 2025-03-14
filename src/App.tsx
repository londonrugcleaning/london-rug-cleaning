
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

// Eagerly load the Index component for fast initial load
import Index from "./pages/Index";

// Lazy load all other routes
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PersianRugCleaning = lazy(() => import("./pages/services/PersianRugCleaning"));
const OrientalRugCleaning = lazy(() => import("./pages/services/OrientalRugCleaning"));
const AntiqueRugCleaning = lazy(() => import("./pages/services/AntiqueRugCleaning"));
const AreaRugCleaning = lazy(() => import("./pages/services/AreaRugCleaning"));
const WoolRugCleaning = lazy(() => import("./pages/services/WoolRugCleaning"));
const HandKnottedRugCleaning = lazy(() => import("./pages/services/HandKnottedRugCleaning"));
const RugStainRemoval = lazy(() => import("./pages/services/RugStainRemoval"));
const SyntheticRugCleaning = lazy(() => import("./pages/services/SyntheticRugCleaning"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex min-h-[70vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home page is not lazy loaded for optimal FCP */}
              <Route path="/" element={<Index />} />
              
              {/* Lazy loaded routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/:service" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Direct service routes */}
              <Route path="/services/persian-rug-cleaning" element={<PersianRugCleaning />} />
              <Route path="/services/oriental-rug-cleaning" element={<OrientalRugCleaning />} />
              <Route path="/services/antique-rug-cleaning" element={<AntiqueRugCleaning />} />
              <Route path="/services/area-rug-cleaning" element={<AreaRugCleaning />} />
              <Route path="/services/wool-rug-cleaning" element={<WoolRugCleaning />} />
              <Route path="/services/hand-knotted-rug-cleaning" element={<HandKnottedRugCleaning />} />
              <Route path="/services/rug-stain-removal" element={<RugStainRemoval />} />
              <Route path="/services/synthetic-rug-cleaning" element={<SyntheticRugCleaning />} />
              
              {/* Sitemap route */}
              <Route path="/sitemap.xml" element={<Sitemap />} />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
