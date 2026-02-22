import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import GiftCard from './components/GiftCard';
import About2 from './components/About2';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Comparison from './components/Comparison';
import OurServices from './components/Ourservices';

function App() {
  return (
    <div className="bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <Testimonials />
      {/* <Services /> */}
      <GiftCard />
      {/* <Comparison /> */}
      <OurServices />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;