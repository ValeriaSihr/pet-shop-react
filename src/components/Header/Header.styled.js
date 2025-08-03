import styled from "styled-components";

export const Header = styled.header`
  color: var(--font-color);
  font-family: var(--font-family); 
  position: relative;
  
  
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;

  /* Mobile styles */
  @media screen and (max-width: 768px) {
    display: none;
  }

  /* Tablet styles */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex: 1;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    flex: 1;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    flex: 1;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  

  /* Mobile styles */
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  /* Tablet styles */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex: 1;
    justify-content: center;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    flex: 1;
    justify-content: center;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    flex: 1;
    justify-content: center;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /* Mobile styles */
  @media screen and (max-width: 768px) {
    gap: 8px;
    margin-right: 20px;
  }

  /* Tablet styles */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex: 1;
    justify-content: flex-end;
    gap: 12px;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    flex: 1;
    justify-content: flex-end;
    gap: 14px;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
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
  z-index: 1001;
  position: relative;

  /* Mobile styles */
  @media screen and (max-width: 768px) {
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
    background-color: #9D875C;
    transition: all 0.3s ease;
    transform-origin: center;
    will-change: transform, opacity;
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
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);                       
                      
`;

// Mobile menu
export const MobileMenu = styled.div`
  
  background-color: rgb(245, 245, 220);  
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  min-width: 280px;
  max-width: 90%;
  max-height: 80vh;  
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  overflow-y: auto;
  scroll-behavior: smooth;
  margin: 20px;
  
  
  

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    min-width: 250px;
    padding: 20px;
    margin: 16px;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    min-width: 300px;
    padding: 25px;
  }
`;

// Mobile navigation list
export const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
 
`;

// Mobile navigation item
export const MobileNavItem = styled.li`
  font-size: 1.2rem;
  padding: 15px 0;
  border-bottom: 1px solid #473600;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: center;
  color: #473600;
  -webkit-tap-highlight-color: transparent;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #f0e2a2;
  }

  &:active {
    color: #f0e2a2;
  }
`;