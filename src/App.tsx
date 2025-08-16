import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from './components/Blogging';
import BookDemo from "./components/BookDemo";
import CommonMistake from "./pages/blog/CommonMistake";
import AIVsHuman from "./pages/blog/AiVsHuman";
import RevolutionizingPrep from "./pages/blog/RevolutionizingPrep";
import Behavioural from "./pages/blog/Behavioural";
import FutureHiring from "./pages/blog/FutureHiring";
import PersonalisedFeedback from "./pages/blog/PersonalisedFeedback";
import { HashRouter } from "react-router-dom"; // <-- Changed BrowserRouter to HashRouter
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="dsatrek-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* <BrowserRouter> */}
        <HashRouter>
            <ScrollToTop />  
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
             <Route path="/blog" element={<Blog />} /> 
             <Route path="/bookDemo" element={<BookDemo />} /> 
             <Route path="/Revolutionizing-Prep" element={<RevolutionizingPrep />} />
             <Route path="/Common-Mistake" element={<CommonMistake />} />
             <Route path="/AI-vs-Human" element={<AIVsHuman />} />
             <Route path="/Behavioural-Interview" element={<Behavioural />} />
             <Route path="/Future-Hiring" element={<FutureHiring />} />
             <Route path="/Personalised-Feedback" element={<PersonalisedFeedback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </BrowserRouter> */}
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
