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
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;

/* Tablet styles */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 2fr);

  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    grid-template-columns: repeat(4, 1fr);
  }

`
export const ProductItem = styled.li`
padding: 20px;
display: flex;
flex-direction: column;
/* align-items: flex-start; */

svg {
  width: 100px;
}
`
export const ImageWrapper = styled.div`
position: relative;
display: inline-block;
border-radius: 5px;
overflow: hidden;
`
export const Overlay = styled.div`
position: absolute;
inset: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.45);
opacity: 0;
visibility: hidden;
transition: opacity 250ms ease, visibility 250ms ease;

button {
  background-color: var(--color-primary-brand);
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  color: #fff;
  cursor: pointer;
}

${ImageWrapper}:hover &,
${ImageWrapper}:focus-within & {
  opacity: 1;
  visibility: visible;
}
`


export const ProductImage = styled.img`
background-image: url(${GliterImg});
background-repeat: no-repeat;
background-size: cover;
/* backdrop-filter: blur(5px); */
/* filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)); */
object-fit: cover;
border-radius: 5px;
margin-bottom: 10px;
height: 120px;
width: 120px;
padding: 10px;



/* Tablet styles */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
      
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
  
  }

`