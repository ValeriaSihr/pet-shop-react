import Pet1 from "../../img/contact1.jpg"
import Pet2 from "../../img/contact2.jpg"
import Pet3 from "../../img/contact3.jpg"
import Pet4 from "../../img/contact4.jpg"
import Pet5 from "../../img/contact5.jpg"
import Pet6 from "../../img/contact6.jpg"
import { useState } from "react"
import Play from "../../img/play-fill.svg?react"
import Location from "../../img/geo-alt-fill.svg?react"
import WorkingHours from "../../img/clock-fill.svg?react"

const pairedSlider = [
    { slide1: Pet1, slide2: Pet2 },
    { slide1: Pet3, slide2: Pet4 },
    { slide1: Pet5, slide2: Pet6 },
    
]

export default function Contact() {

    const [currentPairIndex, setCurrentPairIndex] = useState(0);
    const nextPair = () => {
        setCurrentPairIndex((prevIndex) => (prevIndex + 1) % pairedSlider.length)
    }

    const { slide1, slide2 } = pairedSlider[currentPairIndex];

    return <section>
        <div>
            <img src={slide1} alt="Pet" />
            <button type="button" onClick={nextPair} aria-label="Next images"><Play/></button> 
            <img src={slide2} alt="Shpitz" />           
        </div>
        <div>
            <h2>Contact us</h2>
            <p>Come fo the care, leave with the smile</p>
            <WorkingHours />
            <p>Monday/Friday 9:00-23:00</p>
            <p>Saturday 10:00-21:00</p>

            <address>
                <ul>
                    <li>
                        <Location/>
                        <a href="tel:+012-345-6789">+012-345-6789</a>
                    </li>
                    <li>
                        <a href="mailto:TheWildKingdom@contact.com">TheWildKingdom@contact.com</a>
                    </li>
                    <li><a href="https://www.google.com/maps"></a>9889 Lorem Ipsum street, Pellentesque, CA, USA</li>
                </ul>
            </address>
            <button type="button">Contact</button>
        </div>

    </section>
}