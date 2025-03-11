
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import PersianRugCleaning from "./pages/services/PersianRugCleaning";
import OrientalRugCleaning from "./pages/services/OrientalRugCleaning";
import WoolRugCleaning from "./pages/services/WoolRugCleaning";
import AreaRugCleaning from "./pages/services/AreaRugCleaning";
import SyntheticRugCleaning from "./pages/services/SyntheticRugCleaning";
import AntiqueRugCleaning from "./pages/services/AntiqueRugCleaning";
import HandKnottedRugCleaning from "./pages/services/HandKnottedRugCleaning";
import RugStainRemoval from "./pages/services/RugStainRemoval";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { Navigation } from "./components/Navigation";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/persian-rug-cleaning" element={<PersianRugCleaning />} />
          <Route path="/services/oriental-rug-cleaning" element={<OrientalRugCleaning />} />
          <Route path="/services/wool-rug-cleaning" element={<WoolRugCleaning />} />
          <Route path="/services/area-rug-cleaning" element={<AreaRugCleaning />} />
          <Route path="/services/synthetic-rug-cleaning" element={<SyntheticRugCleaning />} />
          <Route path="/services/antique-rug-cleaning" element={<AntiqueRugCleaning />} />
          <Route path="/services/hand-knotted-rug-cleaning" element={<HandKnottedRugCleaning />} />
          <Route path="/services/rug-stain-removal" element={<RugStainRemoval />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
