import styled from "styled-components";

export const AboutUsSection = styled.section`


  

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

export const AboutImage = styled.img`
width: 100%;
height: auto;
border: 1px solid var(--color-primary-brand);
padding: 15px;


  /* Mobile styles */
  @media screen and (max-width: 768px) {
    display: none;
   
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }


/* Desktop styles */
  @media screen and (min-width: 1281px) {
    margin: 0 40px 0 20px;
    width: 600px;
    height: 400px;
  }
`