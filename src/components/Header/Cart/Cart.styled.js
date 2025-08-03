import styled from "styled-components";

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 50px;
  background-color: transparent;
  border: 0.5px solid var(--font-color);
  border-radius: 50px;
  color: var(--font-color);  
  padding: 8px;
  width: 110px;
  height: 40px;
  cursor: pointer;
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
  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-left: 10px;
    width: 80px;
    height: 35px;
    padding: 6px;
    gap: 0.3rem;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: 30px;
    width: 95px;
    height: 38px;
    padding: 7px;
    gap: 0.4rem;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 40px;
    width: 100px;
    height: 39px;
    padding: 7.5px;
    gap: 0.45rem;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    margin-left: 50px;
    width: 110px;
    height: 40px;
    padding: 8px;
    gap: 0.5rem;
  }
`;

export const CartText = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8rem;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.85rem;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 0.88rem;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    font-size: 0.9rem;
  }
`;

export const CartCount = styled.span`
  margin-left: 0.5rem;
  font-weight: 500;
  font-size: 0.8rem;

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-left: 0.3rem;
    font-size: 0.7rem;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0.4rem;
    font-size: 0.75rem;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 0.45rem;
    font-size: 0.78rem;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const CartImage = styled.img`
  width: 22px;
  color: var(--font-color);

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 18px;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 20px;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 21px;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    width: 22px;
  }
`;

