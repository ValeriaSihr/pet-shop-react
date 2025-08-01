import styled from "styled-components";

export const HeadderButton = styled.button`
  background-color: transparent;
  border: 0.5px solid var(--font-color);
  border-radius: 50px;
  color: var(--font-color);  
  padding: 8px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(240, 226, 162, 0.7);
    color: #212121;
    background-color: var(--font-color);
    transition: all 500ms ease;
    box-shadow: 0px 5px 10px 0px rgba(239, 225, 164, 0.7);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 5px 10px 0px rgba(239, 225, 164, 0.7);
  }

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    width: 80px;
    height: 35px;
    padding: 6px;
    font-size: 0.8rem;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    width: 90px;
    height: 38px;
    padding: 7px;
    font-size: 0.9rem;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    width: 100px;
    height: 40px;
    padding: 8px;
    font-size: 1rem;
  }
`;