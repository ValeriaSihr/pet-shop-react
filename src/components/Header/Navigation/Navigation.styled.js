import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-family);
  
  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none; 
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;  

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--background-color, #fff);
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    gap: 15px;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 18px;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color, #f0e2a2);
  }

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.1rem;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.95rem;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 0.98rem;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    font-size: 1rem;
  }
`;