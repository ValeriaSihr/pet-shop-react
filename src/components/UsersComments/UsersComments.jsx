import PawSvg from "../../img/paw_svg.svg?react"
import ArrowRight from "../../img/arrow.svg?react"
import ArrowLeft from "../../img/arrowLeft.svg?react"
import Paragraph from "../../img/PARAGRAPH.svg?react"
import Paragraph2 from "../../img/PARAGRAPH2.svg?react"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"


const reviews = [
  { name: "Etiam Vulputate", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate pharetra ante id congue. Cras feugiat, diam a placerat posuere, arcu risus porta elit, sed finibus magna lorem ut turpis." },
  { name: "Curabitur Sollicitudin", text: "Maecenas nec vestibulum nisl. Pellentesque habitant morbi tristique senectus et netus." },
  { name: "Fusce Efficitur", text: "Sed blandit enim at fermentum fermentum. Sed commodo varius justo." },
]

export default function UsersComments() {
   
    
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1,
        }
    })
    return <section>
        <div>
            <button onClick={() => slider.current?.prev()} aria-label="Previous"><ArrowLeft /></button>
            <div ref={sliderRef} className="keen-slider">
                {reviews.map((review, index) => (
                    <div className="keen-slider__slide slide" key={index}>
                        <div><PawSvg /></div>
                        <blockquote>
                            <span><Paragraph /></span>
                            {review.text}
                            <span><Paragraph2/></span>
                        </blockquote>
                        <p>{review.name}</p>
                    </div>

                ))}
            </div>
            <button onClick={()=>slider.current?.next()} aria-label="Next"><ArrowRight/></button>
       </div>
    </section>


 }