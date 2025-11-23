import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/stastics";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <Testimonials />
        <Newsletter />
        <Footer />
    
      </main>
    </>
  );
}