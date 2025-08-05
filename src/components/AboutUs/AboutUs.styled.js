import styled from "styled-components";

export const AboutUsSection = styled.section`
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

export const AboutMainHeading = styled.h2`
display: flex;
align-items: center;
justify-content: center;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
margin-bottom: 20px;

`

export const AboutSecondaryHeading = styled.h3`
font-size: 1.8rem;
text-transform: capitalize;
color: var(--color-primary-brand);
text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
margin-bottom: 10px;
`

export const AbotParagraph1 = styled.p`
font-size: 0.8rem;
margin-bottom: 10px;
`

export const AbotParagraph2 = styled.p`
font-family: var(--font-family);
margin-bottom: 10px;
`

export const AboutList = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 20px;
`

export const AboutItem = styled.li`
border-radius: 50%;
border: none;
background-color: var(--font-color);
width: 80px;
height: 80px;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;

svg{
  width: 50px;
  height: 50px;   
}
`