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
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2rem;
    margin: 10px 20px 15px 20px;
    
    & svg {
      max-width: 120px;
    }
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5rem;
    margin: 15px 50px 20px 50px;
    
    & svg {
      max-width: 160px;
    }
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.7rem;
    margin: 18px 80px 25px 80px;
    
    & svg {
      max-width: 180px;
    }
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    font-size: 1.8rem;
    margin: 20px 100px 30px 100px;
    
    & svg {
      max-width: 200px;
    }
  }
`;

