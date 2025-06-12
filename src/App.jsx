import AboutUs from "./components/AboutUs/AboutUs"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "keen-slider/keen-slider.min.css";
import { HeroWrapper } from "./components/Hero/HeroWrapper.styled";


function App() {
  

  return (
    <>
     <HeroWrapper>
      <Header />
        <Hero />
     </HeroWrapper>
      <AboutUs/>
      
      
    </>
  )
}

export default App
