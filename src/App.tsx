
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { Toaster } from "./components/ui/toaster";

import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PersianRugCleaning from "./pages/services/PersianRugCleaning";
import OrientalRugCleaning from "./pages/services/OrientalRugCleaning";
import AntiqueRugCleaning from "./pages/services/AntiqueRugCleaning";
import AreaRugCleaning from "./pages/services/AreaRugCleaning";
import WoolRugCleaning from "./pages/services/WoolRugCleaning";
import HandKnottedRugCleaning from "./pages/services/HandKnottedRugCleaning";
import RugStainRemoval from "./pages/services/RugStainRemoval";
import SyntheticRugCleaning from "./pages/services/SyntheticRugCleaning";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
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
        </main>
        
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
