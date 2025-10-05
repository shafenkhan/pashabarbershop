import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBooking from './components/FloatingBooking';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Experience />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <FloatingBooking />
    </div>
  );
}

export default App;
