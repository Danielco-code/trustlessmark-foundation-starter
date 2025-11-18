import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Accreditation from "./pages/Accreditation";
import VerifyLanding from "./pages/Verify";
import VerifyPage from "./pages/verify/id";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Explorer from "@/pages/Explorer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/verify" element={<VerifyLanding />} />
          <Route path="/verify/*" element={<VerifyPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/explorer" element={<Explorer />} />   
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


