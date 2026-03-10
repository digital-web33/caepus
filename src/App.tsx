import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import Restaurant from "./pages/Restaurant";
import Traiteur from "./pages/Traiteur";
import Galerie from "./pages/Galerie";
import Actualites from "./pages/Actualites";
import ArticleDetail from "./pages/ArticleDetail";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Accueil /></Layout>} />
          <Route path="/restaurant" element={<Layout><Restaurant /></Layout>} />
          <Route path="/traiteur" element={<Layout><Traiteur /></Layout>} />
          <Route path="/galerie" element={<Layout><Galerie /></Layout>} />
          <Route path="/actualites" element={<Layout><Actualites /></Layout>} />
          <Route path="/actualites/:slug" element={<Layout><ArticleDetail /></Layout>} />
          <Route path="/a-propos" element={<Layout><APropos /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
