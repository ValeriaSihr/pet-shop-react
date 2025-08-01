import styled from "styled-components";

export const Container = styled.div`
  max-width: 372px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    max-width: 100%;
    padding: 0 12px;
    justify-content: space-between;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    max-width: 768px;
    padding: 0 20px;
  }
  
  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 24px;
  }
`;