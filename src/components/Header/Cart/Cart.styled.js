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
  @media only screen and (max-width: 371px) {
    margin-left: 10px;
    width: 80px;
    height: 35px;
    padding: 6px;
    gap: 0.3rem;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    margin-left: 30px;
    width: 95px;
    height: 38px;
    padding: 7px;
    gap: 0.4rem;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
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
  @media only screen and (max-width: 371px) {
    font-size: 0.8rem;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    font-size: 0.85rem;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    font-size: 0.9rem;
  }
`;

export const CartCount = styled.span`
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 0.8rem;

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    margin-left: 0.3rem;
    font-size: 0.7rem;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    margin-left: 0.4rem;
    font-size: 0.75rem;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const CartImage = styled.img`
  width: 22px;
  color: var(--font-color);

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    width: 18px;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    width: 20px;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    width: 22px;
  }
`;

