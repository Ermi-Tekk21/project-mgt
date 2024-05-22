import About from "../AboutUsPage/About";
import Contact from "../ContactUsPage/Contact";
import LandingPage from "../LandingPage/LandingPage";
import PopularProducts from "../ProductsPage/PopularProducts";

function Hero() {
    return (
      <div>
        <LandingPage />
        <About />
        <PopularProducts />
        <Contact />
      </div>
    );
  }
  
  export default Hero;