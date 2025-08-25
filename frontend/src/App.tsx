// src/App.tsx
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Scalability from './components/Scalability.tsx';
import UseCases from './components/UseCases.tsx';
import Testimonials from './components/Testimonials.tsx';
import Pricing from './components/Pricing.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Scalability />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
