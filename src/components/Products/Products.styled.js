import styled from "styled-components";
import GliterImg from "../../img/golden-glitter-background.png";

export const ProductsSection = styled.section`
height: 100%;
margin-bottom: 100px;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`

export const ProductsPrev = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`

export const ProductsHeading = styled.h2`
font-family: var(--font-family);
font-size: 10px;
text-transform: capitalize;
font-weight: 400;
padding-bottom: 20px;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`

export const ProdMainHeadding = styled.h3`
font-size: 30px;
font-family: var(--second-family);
color: var(--color-primary-brand);
text-transform: capitalize;
padding-bottom: 20px;


/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
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
padding-bottom: 40px;
width: 290px;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`
export const ProdContainer = styled.div`
margin-bottom: 30px;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`

export const ProductList = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

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
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


svg {
  width: 100px;
}

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`
export const ImageWrapper = styled.div`
position: relative;
border-radius: 5px;
overflow: hidden;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
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

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`


export const ProductImage = styled.img`
background-image: url(${GliterImg});
background-repeat: no-repeat;
background-size: contain;
object-fit: cover;
border-radius: 5px;
/* margin-bottom: 10px; */
height: 120px;
width: 120px;
/* padding: 8px; */



/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
      
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
  
  }

`
export const ProdInfo = styled.div`
display: flex;
justify-content: space-between;
gap: 30px;
margin: 8px 0 8px 0;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
   
  }
`

export const ProductsTitle = styled.h4`
font-size: 8px;
width: 65px;
`

export const ProductsPrice = styled.p`
font-size: 10px;`


export const ProductsExplore = styled.button`
position: relative;
  left: 35%;
  border: none;
  border-radius: 50px;
  background-image: url(${GliterImg});
  filter: brightness(0.9);
  color: #212121;  
  padding: 8px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;  
  margin-bottom: 30px;

 
  &:focus {
    outline: none;
    box-shadow: 0px 5px 10px 0px rgba(239, 225, 164, 0.7);
  }


  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    left: 0;
    margin-left: 50px;    
    
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px){
    left: 0;
    margin-left: -30px;    
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px){
    left: 0;
    margin-left: 30px;
  }`
