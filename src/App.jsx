import AboutUs from "./components/AboutUs/AboutUs"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "keen-slider/keen-slider.min.css";
import { HeroWrapper } from "./components/Hero/HeroWrapper.styled";
import Products from "./components/Products/Products";
import OurServices from "./components/OurServises/OurSevises";
import Contact from "./components/Contact/Contact";
import UsersComments from "./components/UsersComments/UsersComments";
import Footer from "./components/Footer/Footer";




function App() {
  

  return (
    <>
     <HeroWrapper>
      <Header />
        <Hero />
     </HeroWrapper>
      <AboutUs />
      <Products />
      <OurServices />
      <Contact />
      <UsersComments/>
      <Footer/>

      
      
    </>
  )
}

export default App
