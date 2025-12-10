// Import all components for the landing page
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MeetRealtor from '../components/MeetRealtor';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <div>
      {/* Navigation bar */}
      <Navbar />
      
      {/* Hero section with form */}
      <Hero />
      
      {/* Meet Your Average Realtor section */}
      <MeetRealtor />
      
      {/* Why Choose Us section */}
      <WhyChooseUs />
      
      {/* About Us section */}
      <AboutUs />
      
      {/* Projects section */}
      <Projects />
      
      {/* Client testimonials section */}
      <Clients />
      
      {/* Newsletter subscription section */}
      <Newsletter />
      
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2024 RealTrust. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
