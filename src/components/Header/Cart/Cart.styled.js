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

  &:hover{
    border-color: rgba(240, 226, 162, 0.7);
    color: #212121;
    background-color: var(--font-color);
    transition: all 500ms ease;
    box-shadow: 0px 5px 10px 0px rgba(239, 225, 164, 0.7);

    }

    &:focus{
      outline: none;
      box-shadow: 0px 5px 10px 0px rgba(239, 225, 164, 0.7);
    }

`

export const CartText = styled.p`


`

export const CartCount = styled.span`
margin-left:0.5rem;

`

export const CartImage = styled.img`
  width: 22px;
 color: var(--font-color);


  
  `

