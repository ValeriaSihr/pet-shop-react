import Star from "../../img/stars.svg?react"
import Bed from "../../img/bed.jpg"
import CatFood from "../../img/one_bowl.jpg"
import DogFood from "../../img/two_bowls.jpg"
import Treats from "../../img/snack.jpg"
import CatToy from "../../img/playing_cat.jpg"
import DogToy from "../../img/toy.jpg"
import Bone from "../../img/threats.jpg"
import DogBowls from "../../img/two_bowls.jpg"

export default function Products() {
    return <section>
        <div>
        <h2>Our products</h2>
        <h3>For all your pet needs</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit sapiente ratione soluta quidem adipisci fuga unde porro rerum laborum, quia itaque!</p>
        </div>
        <div>
            <ul>
                <li><img src={Bed} alt="Luxury bed" />
                    <h4>Luxury pet bed</h4>
                    <p>120$</p>
                    <Star/>
                </li>
                <li><img src={CatFood} alt="Cat food" />
                    <h4>Luxury pet bed</h4>
                    <p>20$</p>
                    <Star/></li>
                <li><img src={DogFood} alt="Dog food" />
                    <h4>Dog food</h4>
                    <p>30$</p>
                    <Star/></li>
                <li><img src={Treats} alt="Treat for dog" />
                    <h4>Treat for dog</h4>
                    <p>60$</p>
                    <Star/></li>
                <li><img src={CatToy} alt="scratching toy for cat" />
                    <h4>Scratching toy for cat</h4>
                    <p>200$</p>
                    <Star/></li>
                <li><img src={DogToy} alt="Teddy bear for dog" />
                    <h4>Teddy bear for dog</h4>
                    <p>80$</p>
                    <Star/></li>
                <li><img src={Bone} alt="Treats Knot Bone" />
                    <h4>Treats Knot Bone</h4>
                    <p>8$</p>
                    <Star/></li>
                <li><img src={DogBowls} alt="dog bowls" />
                    <h4>Dog bowls</h4>
                    <p>120$</p>
                    <Star/></li>
            </ul>
        </div>
        <button type="submit">Explore</button>
    </section>
}