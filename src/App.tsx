import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UnifyProject from "./pages/projects/UnifyProject";
import RentalMasterProject from "./pages/projects/RentalMasterProject";
import MiCasaDAOProject from "./pages/projects/MiCasaDAOProject";
import ThirdStrandProject from "./pages/projects/ThirdStrandProject";
import KitsumonProject from "./pages/projects/KitsumonProject";
import JOVIProject from "./pages/projects/JOVIProject";
import EcomstoreProject from "./pages/projects/EcomstoreProject";
import FoodstoreProject from "./pages/projects/FoodstoreProject";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/unify" element={<UnifyProject />} />
          <Route path="/projects/rentalmaster" element={<RentalMasterProject />} />
          <Route path="/projects/micasadao" element={<MiCasaDAOProject />} />
          <Route path="/projects/thirdstrand" element={<ThirdStrandProject />} />
          <Route path="/projects/kitsumon" element={<KitsumonProject />} />
          <Route path="/projects/jovi" element={<JOVIProject />} />
          <Route path="/projects/ecomstore" element={<EcomstoreProject />} />
          <Route path="/projects/foodstore" element={<FoodstoreProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
