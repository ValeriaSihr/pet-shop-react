import Star from "../../img/stars.svg?react"
import Bed from "../../img/bed.jpg"
import CatFood from "../../img/one_bowl.jpg"
import DogFood from "../../img/two_bowls.jpg"
import Treats from "../../img/snack.jpg"
import CatToy from "../../img/playing_cat.jpg"
import DogToy from "../../img/toy.jpg"
import Bone from "../../img/threats.jpg"
import DogBowls from "../../img/water_bowl.jpg"
import products from "../../products.json"


const images = {
    Bed,
    CatFood,
    DogFood,
    Treats,
    CatToy,
    DogToy,
    Bone,
    DogBowls,
 }

export default function Products() {
    return <section>
        <div>
        <h2>Our products</h2>
        <h3>For all your pet needs</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit sapiente ratione soluta quidem adipisci fuga unde porro rerum laborum, quia itaque!</p>
        </div>
        <div>
            <ul>
                {products.map(({ id, src, title, price, alt }) => (
                <li key={id}>
                    <img src={images[src]} alt={alt} />
                    <h4>{title}</h4>
                    <p>{price} $</p>
                    <Star/>
                </li>
                ))}
                
            </ul>
        </div>
        <button type="submit">Explore</button>
    </section>
}