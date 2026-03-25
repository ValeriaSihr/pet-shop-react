import Star from "../../img/stars.svg?react"
import Bed from "../../img/bed.jpg"
import CatFood from "../../img/one_bowl1.png"
import DogFood from "../../img/two_bowls.jpg"
import Treats from "../../img/snack.jpg"
import CatToy from "../../img/playing_cat.jpg"
import DogToy from "../../img/toy.jpg"
import Bone from "../../img/threats.jpg"
import DogBowls from "../../img/water_bowl.jpg"
import products from "../../products.json"
import * as SC from "./Products.styled.js";
import Container from "../Container/Container.jsx";
import { ProductsModal } from "./ProductsModal.jsx";
import { useState } from "react";



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

    const [selectedProduct, setSelectedProduct] = useState(null);

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
                    <SC.ProductItem key={id}
                        onClick={() => setSelectedProduct({
                            title,
                            price,
                            alt,
                            img: images[src],
                        })
                        }>
                        <SC.ImageWrapper>
                            <SC.ProductImage src={images[src]} alt={alt} />
                            <SC.Overlay>
                                <button type="button">Add to Cart</button>
                            </SC.Overlay>
                        </SC.ImageWrapper>
                        <SC.ProdInfo>
                            <SC.ProductsTitle>{title}</SC.ProductsTitle>
                            <SC.ProductsPrice>{price} $</SC.ProductsPrice>
                        </SC.ProdInfo>
                    <Star/>
                </SC.ProductItem>
                ))}
                
            </SC.ProductList>
        </SC.ProdContainer>
            <SC.ProductsExplore type="button">Explore</SC.ProductsExplore>
        </Container>
        <ProductsModal product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
        />
    </SC.ProductsSection>
}