import styled from "styled-components";

export const Logo = styled.div`
  text-transform: uppercase;
  font-family: var(--second-family);
  font-size: 1.8rem;
  margin: 20px 100px 30px 100px;

  & h1 {
    visibility: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    width: 100%;
    height: auto;
    max-width: 200px;
  }

  /* Mobile styles */
  @media only screen and (min-width: 371px) {
    font-size: 1.2rem;
    margin: 10px 20px 15px 20px;
    
    & svg {
      max-width: 120px;
    }
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    font-size: 1.5rem;
    margin: 15px 50px 20px 50px;
    
    & svg {
      max-width: 160px;
    }
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    font-size: 1.8rem;
    margin: 20px 100px 30px 100px;
    
    & svg {
      max-width: 200px;
    }
  }
`;

