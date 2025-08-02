import styled from "styled-components";

export const Container = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 100%;
    padding: 0 12px;
    justify-content: space-between;
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