import styled from "styled-components";

export const HeaderButton = styled.button`
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
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 35px;
    padding: 6px;
    font-size: 0.8rem;
  }

  /* Tablet styles */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 90px;
    height: 38px;
    padding: 7px;
    font-size: 0.9rem;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 95px;
    height: 39px;
    padding: 7.5px;
    font-size: 0.95rem;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    width: 100px;
    height: 40px;
    padding: 8px;
    font-size: 1rem;
  }
`;