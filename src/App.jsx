import { Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';
import WealthifiedCaseStudy from './pages/WealthifiedCaseStudy';
import AutistemCaseStudy from './pages/AutistemCaseStudy';
import HomeMaintenanceCaseStudy from './pages/HomeMaintenanceCaseStudy';
import About from './pages/About';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-yellow-200 bg-[#F8F7F4] md:bg-[#F8F7F4]">
      <Hero />
      <SelectedWork />
    </div>
  );
}

function App() {
  // Global footer should always be rendered to span 100vw

  return (
    <div className="flex flex-col bg-[#F8F7F4] md:bg-[#F8F7F4] overflow-x-hidden">
      <Navigation />
      <div className="pt-[80px]">
        <PageTransition>
          <Route path="/" element={<Home />} />
          <Route path="/work/wealthified" element={<WealthifiedCaseStudy />} />
          <Route path="/work/autistem" element={<AutistemCaseStudy />} />
          <Route path="/work/home-maintenance" element={<HomeMaintenanceCaseStudy />} />
          <Route path="/about" element={<About />} />
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}

export default App;
