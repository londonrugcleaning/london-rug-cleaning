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
