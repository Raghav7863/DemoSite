import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import PCSpecs from './components/PCSpecs';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main id="home">
        <Hero />
        <Pricing />
        <PCSpecs />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
