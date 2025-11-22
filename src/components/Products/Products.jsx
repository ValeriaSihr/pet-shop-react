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
import * as SC from "./Products.styled.js";
import Container from "../Container/Container.jsx"


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
    return <SC.ProductsSection>
        <Container>
        <SC.ProductsPrev>
        <SC.ProductsHeading>Our products</SC.ProductsHeading>
        <SC.ProdMainHeadding>For all your pet needs</SC.ProdMainHeadding>
        <SC.ProdParagraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit sapiente ratione soluta quidem adipisci fuga unde porro rerum laborum, quia itaque!</SC.ProdParagraph>
        </SC.ProductsPrev>
        <SC.ProdContainer>
            <SC.ProductList>
                {products.map(({ id, src, title, price, alt }) => (
                <SC.ProductItem key={id}>
                    <SC.ProductImage src={images[src]} alt={alt} />
                    <h4>{title}</h4>
                    <p>{price} $</p>
                    <Star/>
                </SC.ProductItem>
                ))}
                
            </SC.ProductList>
        </SC.ProdContainer>
            <button type="submit">Explore</button>
            </Container>
    </SC.ProductsSection>
}