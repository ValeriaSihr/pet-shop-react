import { useKeenSlider } from 'keen-slider/react';
import Pet1 from '../../img/hero_big_dog.png';
import Pet2 from '../../img/hero_cat1.png';
import Pet3 from '../../img/hero_dog1_copy.png';
import Pet4 from '../../img/hero_cat2.png';
import Left from '../../img/arrow-left.svg';
import Right from '../../img/arrow-right.svg';
import 'keen-slider/keen-slider.min.css';
import * as SC from "./Hero.styled" 
import Container from '../Container/Container';



export default function Hero() {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slidesPerView: 4,
      spacing: 15,
    })
    
    const images = [
        {src: Pet1},
        {src: Pet2},
        {src: Pet3},
        {src: Pet4},
    ]    

    return <SC.HeroSection>
        <Container>
        <SC.HeroParagraph>A better world for pets</SC.HeroParagraph>
        <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img src={src.src} alt={`Pet ${idx + 1}`} />
          </div>
        ))}
        </div>

        <button onClick={() => slider.current?.prev()}>
        <img src={Left} alt="Prev" />
      </button>
      <button onClick={() => slider.current?.next()}>
        <img src={Right} alt="Next" />
      </button>
      </Container>
    </SC.HeroSection>
}