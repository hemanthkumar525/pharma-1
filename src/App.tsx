import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import AboutUs from './components/AboutUs';
import BecomeMember from './components/BecomeMember';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import OurTeam from './components/OurTeam';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeOffer />
      <AboutUs />
      <BecomeMember />
      <WhyChooseUs />
      <Testimonials />
      <OurTeam />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
