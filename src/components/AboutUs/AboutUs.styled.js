import styled from "styled-components";
import GliterImg from "../../img/golden-glitter-background.png";

export const AboutUsSection = styled.section`
margin-bottom: 170px;
height: 100%;


> div {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    margin-bottom: 300px;
  }
`

export const AboutImage = styled.img`
/* width: 100%; */
height: auto;
border: 1px solid var(--color-primary-brand);
padding: 15px;


  /* Mobile styles */
  @media screen and (max-width: 767px) {
    display: none;
   
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 350px;
    height: 100%;
    padding: 10px;
    position: relative;
    top: -100px;
    
  }

  /* Laptop styles */
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 400px;
    position: relative;
    top: 10px;
    right: 70px;
  }


/* Desktop styles */
  @media screen and (min-width: 1280px) {
    margin: 0 40px 0 20px;
    width: 600px;
    height: 400px;
  }
`

export const AboutUsContainer = styled.div`
margin: 0 auto;
padding: 20px;

`

export const AboutMainHeading = styled.h2`
text-align: center;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
margin-bottom: 20px;
font-family: var(--font-family);
font-weight: 400;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: start;
    margin-left: 50px;
    font-size: 0.8rem;
    
  }

  /* Laptop styles */
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
   margin-left: -30px;
   text-align: start;
    font-size: 0.8rem;


  }

  /* Desktop styles */
  @media screen and (min-width: 1280px) {
    margin-left: 30px;
   text-align: start;
    font-size: 0.8rem;
  }

`

export const AboutSecondaryHeading = styled.h3`
font-size: 1.5rem;
text-transform: capitalize;
color: var(--color-primary-brand);
text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
margin-bottom: 10px;
text-align: center;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: start;
    margin-left: 50px;
    font-size: 1.5rem;
    
  }
  /* Laptop styles */
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
   margin-left: -30px;
   text-align: start;
    font-size: 1.5rem;
  }


   /* Desktop styles */
  @media screen and (min-width: 1280px) {
    margin-left: 30px;
   text-align: start;
    font-size: 1.5rem;
  }

`

export const AbotParagraph1 = styled.p`
font-size: 0.8rem;
margin-bottom: 10px;
text-align: center;

/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: start;
    margin-left: 50px;
    font-size: 0.7rem;
    
  }

  /* Laptop styles */
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
   margin-left: -30px;
   text-align: start;
    font-size: 0.8rem;
  }

   /* Desktop styles */
  @media screen and (min-width: 1280px) {
    margin-left: 30px;
   text-align: start;
    font-size: 0.8rem;
  }
`

export const AbotParagraph2 = styled.p`
font-family: var(--font-family);
margin-bottom: 30px;
font-size: 1rem;
text-align: center;


/* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: start;
    margin-left: 50px;
    font-size: 1rem;
    
  }

  /* Laptop styles */
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
   margin-left: -30px;
   
   text-align: start;
    font-size: 0.8rem;
  }

   /* Desktop styles */
  @media screen and (min-width: 1280px) {
  margin-left: 30px;
  text-align: start;
  font-size: 0.9rem;
  width: 70%;
    
    
  }

`

export const AboutBtn = styled.button`
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


  @media screen and (min-width: 768px) and (max-width: 1023px) {
    left: 0;
    margin-left: 50px;    
    
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px){
    left: 0;
    margin-left: -30px;    
  }

  @media screen and (min-width: 1280px){
    left: 0;
    margin-left: 30px;
  }
`
export const AboutList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  gap: 40px;

   @media screen and (min-width: 768px) and (max-width: 1023px) {
  
    margin: 0 -100px;
  }

  /* Laptop styles */
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
  position: relative;
  right: 50px;
  margin: 0 -100px;
   
  }

  @media screen and (min-width: 1280px){
   display: flex;
    justify-content: space-around;
    margin: 0 -200px;
    gap: 90px;
    position: relative;
    top: 5rem;
    right: 20rem;

  }
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

   /* Mobile styles */
  @media screen and (max-width: 767px) {
    svg {
      width: 60px;
      height: 60px;
    }

    p {
      font-size: 8px;
    }
   
  }

  
  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
   position: relative;
   right: 150px;
  
    
  }

  @media screen and (min-width: 1280px){
    svg{
      width:100px;
      height:100px;
      padding: 30px;
    }
  }
`;

