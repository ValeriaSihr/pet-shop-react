import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 16px;
  }

  button {
    padding: 8px 16px;
    cursor: pointer;
    background: var(--color-primary-brand, #9D875C);
    color: #fff;
    border: none;
    border-radius: 6px;
  }
`;
