import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
 

  /* Mobile styles */
  @media screen and (max-width: 768px) {
    padding: 0 12px;
   
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 768px;
    padding: 0 20px;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1024px;
    padding: 0 22px;
  }
  
  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    max-width: 1440px;
    padding: 0 24px;
  }
`;