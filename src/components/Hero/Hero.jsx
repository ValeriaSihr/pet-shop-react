import { useKeenSlider } from 'keen-slider/react';

import Pet1 from '../../img/black-doggo-hero.jpg';
import Pet2 from '../../img/cat-with-blue-eyes-hero.avif';
import Pet3 from '../../img/dog-black-hero.avif';
import Pet4 from '../../img/french-bulldog-hero.webp';
import Pet5 from '../../img/hero-dog-edit.jpg';
import Pet6 from '../../img/Hero-cat-edit.jpg';
import Pet7 from '../../img/Hero-dog-edit1.jpg';

import 'keen-slider/keen-slider.min.css';
import * as SC from "./Hero.styled" 
import Container from '../Container/Container';



export default function Hero() {
  const [sliderRef] = useKeenSlider({
    loop: true,
  },
    [(slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next()
        },2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
    ]
  )

    return <SC.HeroSection>
        <Container>
        <SC.HeroParagraph>A better world for pets</SC.HeroParagraph>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img className="round-img" src={Pet1} alt="Black dog" />
          </div>
          <div className="keen-slider__slide">
            <img className="round-img" src={Pet2} alt="Cat with blue eyes" />
          </div>
          <div className="keen-slider__slide">
            <img className="round-img" src={Pet3} alt="Black dog" />
          </div>
          <div className="keen-slider__slide">
            <img className="round-img" src={Pet4} alt="French bulldog" />
          </div>
          <div className="keen-slider__slide">
            <img className="round-img" src={Pet5} alt="Dog" />
          </div>
          <div className="keen-slider__slide">
            <img className="round-img" src={Pet6} alt="Cat" />
          </div>
          <div className="keen-slider__slide">
            <img className="round-img" src={Pet7} alt="Dog" />
          </div>
       
        </div>

      
      </Container>
    </SC.HeroSection>
}