import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Gallery/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
