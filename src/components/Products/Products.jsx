import Star from "../../img/stars.svg?react"
import Bed from "../../img/bed.jpg"
import CatFood from "../../img/one_bowl.jpg"
import DogFood from "../../img/two_bowls.jpg"
import Treats from "../../img/snack.jpg"
import CatToy from "../../img/playing_cat.jpg"
import DogToy from "../../img/toy.jpg"
import Bone from "../../img/threats.jpg"
import DogBowls from "../../img/two_bowls.jpg"

const products = [
    { id: 1, src: Bed, title: "Luxury pet bed", price: 120, alt: "Luxury bed" },
    { id: 2, src: CatFood, title: "Cat food", price: 20, alt: "Cat food" },
    { id: 3, src: DogFood, title: "Dog food", price: 30, alt: "Dog food" },
    { id: 4, src: Treats, title: "Treat for dog", price: 60, alt: "Treat for dog" },
    { id: 5, src: CatToy, title: "Scratching toy for cat", price: 200, alt: "scratching toy for cat" },
    { id: 6, src: DogToy, title: "Teddy bear for dog", price: 80, alt: "Teddy bear for dog" },
    { id: 7, src: Bone, title: "Treats Knot Bone", price: 8, alt: "Treats Knot Bone" },
    { id: 8, src: DogBowls, title: "Dog bowls", price: 120, alt: "Dog bowls" },
]


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
                    <img src={src} alt={alt} />
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