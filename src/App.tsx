import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Equipe from "./pages/Equipe";
import Historique from "./pages/Historique";
import Departements from "./pages/Departements";
import Projets from "./pages/Projets";
import Structures from "./pages/Structures";
import Partenaires from "./pages/Partenaires";
import Actualites from "./pages/Actualites";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/historique" element={<Historique />} />
              <Route path="/departements" element={<Departements />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/structures" element={<Structures />} />
              <Route path="/partenaires" element={<Partenaires />} />
              <Route path="/actualites" element={<Actualites />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
