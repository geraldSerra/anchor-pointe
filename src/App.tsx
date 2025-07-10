import styles from "./App.module.css";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import Advice from "./components/Advice/Advice";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MisionVisionSection from "./components/MisionVisionSection/MisionVisionSection";
import NavBar from "./components/Navbar/NavBar";
import ServicesSection from "./components/ServiciosSection/ServicesSection";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <Advice />
      <AboutUsSection />
      <MisionVisionSection />
      <ServicesSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
