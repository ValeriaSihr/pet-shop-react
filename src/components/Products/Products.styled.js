import styled from "styled-components";
import GliterImg from "../../img/golden-glitter-background.png";

export const ProductsSection = styled.section`
height: 100%;
margin-bottom: 100px;

`

export const ProductsPrev = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const ProductsHeading = styled.h2`
font-family: var(--font-family);
font-size: 10px;
text-transform: capitalize;
font-weight: 400;
padding-bottom: 20px;

 

`

export const ProdMainHeadding = styled.h3`
font-size: 30px;
font-family: var(--second-family);
color: var(--color-primary-brand);
text-transform: capitalize;
padding-bottom: 20px;


/* Tablet styles */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    font-size: 50px;
  }

`
export const ProdParagraph = styled.p`
font-family: var(--font-family);
font-size: 10px;
text-align: center;
padding-bottom: 60px;
width: 290px;
`
export const ProdContainer = styled.div`
`

export const ProductList = styled.ul`

`
export const ProductItem = styled.li`



`

export const ProductImage = styled.img`
background-image: url(${GliterImg});
background-repeat: no-repeat;
background-size: cover;
backdrop-filter: blur(5px);

`