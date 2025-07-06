import FunnyCatPic from "../../img/funny_cat.jpg"
import Services1 from "../../img/services1.jpg"
import Services2 from "../../img/services2.jpg"
import Services3 from "../../img/services3.jpg"
import Services4 from "../../img/services4.jpg"
import SvgBtn from "../../img/arrow.svg?react"

const services = [
    { id: 1, src: Services1, alt: "Dog care", text: "Taking dogs care to the next level" },
    { id: 2, src: Services2, alt: "Pet health", text: "We value the best health of your pets" },
    { id: 3, src: Services3, alt: "Pet vacation", text: "Trust us with your pet’s vacation" },
    { id: 4, src: Services4, alt: "Cat care", text: "We treat cats with utmost care" },
]

export default function OurServices() {
    return (
        <section>
            <img src={FunnyCatPic} alt="Fluffy cat" />
            <div>
                <h2>Our services</h2>
                <h3>Quality things for loving pets</h3>
                <p>More than a Pet Store...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi id augue ultrices, in tempus elit tristique. Aliquam ultrices sem non.</p>
                <button type="button">Explore</button>
            </div>
            <div>
                <ul>
                    {services.map(({ id, src, alt, text }) => (
                        <li key={id}>
                            <img src={src} alt={alt} />
                            <p>{text}</p>
                            <SvgBtn/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}