import styled from "styled-components";

export const Header = styled.header`
  color: var(--font-color);
  font-family: var(--font-family);
  width: 100%;
  padding: 16px 0;
  position: relative;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    display: none;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    flex: 1;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    flex: 1;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    justify-content: flex-start;
    
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    flex: 1;
    justify-content: center;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    flex: 1;
    justify-content: center;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    gap: 8px;
    margin-right: 20px;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    flex: 1;
    justify-content: flex-end;
    gap: 12px;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    flex: 1;
    justify-content: flex-end;
    gap: 16px;
  }
`;

// Mobile menu button
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-right: 20px;

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    display: block;
  }
`;

// Hamburger icon
export const HamburgerIcon = styled.div`
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--font-color);
    transition: all 0.3s ease;
    transform-origin: center;
  }

  ${({ isOpen }) => isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  `}
`;

// Mobile menu overlay
export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
`;

// Mobile menu
export const MobileMenu = styled.div`
  background-color: var(--background-color, #fff);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  min-width: 280px;
  max-width: 90%;
`;

// Mobile navigation list
export const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Mobile navigation item
export const MobileNavItem = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--accent-color, #f0e2a2);
  }
`;