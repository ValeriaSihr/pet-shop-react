import { useKeenSlider } from 'keen-slider/react';
import Pet1 from '../../img/hero_big_dog.png';
import Pet2 from '../../img/hero_cat1.png';
import Pet3 from '../../img/hero_dog1.png';
import Pet4 from '../../img/hero_cat2.png';
import 'keen-slider/keen-slider.min.css';


export default function Hero() {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slidesPerView: 1,
        spacing: 15,
    })
    
    const images = [
        {src: Pet1},
        {src: Pet2},
        {src: Pet3},
        {src: Pet4},
    ]    

    return <section>

        <p>A better world for pets</p>
        <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img src={src.src} alt={`Pet ${idx + 1}`} />
          </div>
        ))}
        </div>

        <button onClick={() => slider.current?.prev()}>
        <img src="../../img/arrow-left.svg" alt="Prev" />
      </button>
      <button onClick={() => slider.current?.next()}>
        <img src="../../img/arrow-right.svg" alt="Next" />
      </button>
    </section>
}