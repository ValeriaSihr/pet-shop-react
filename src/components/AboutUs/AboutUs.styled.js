import styled from "styled-components";
import GliterImg from "../../img/golden-glitter-background.png";

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
margin-bottom: 30px;
`

export const AboutBtn = styled.button`
  position: relative;
  left: 35%;
  border: 0.5px solid var(--font-color);
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
`
export const AboutList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  gap: 40px;
`;

export const AboutItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  svg {
    width: 80px;
    height: 80px;
    background-color: var(--font-color);
    background-image: url(${GliterImg});    
    border-radius: 50%;
    padding: 15px;
    filter: brightness(0.9);
  }

  p {
    margin: 0;
    font-size: 12px;
    text-align: center;
  }
`;

// export const AboutList = styled.ul`
// display: flex;
// align-items: center;
// justify-content: space-between;
// margin: 0 20px;
// gap: 40px;
// `

// export const AboutItem = styled.li`
// border-radius: 50%;
// border: none;
// background-color: var(--font-color);
// background-image: url(${GliterImg});
// filter: brightness(0.9);
// width: 80px;
// height: 80px;
// padding: 10px;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;


// svg{
//   width: 50px;
//   height: 50px;
// }
// `