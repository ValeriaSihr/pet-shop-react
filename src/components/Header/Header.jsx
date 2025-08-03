import { useState, useEffect } from "react";
import Container from "../Container/Container";
import Button from "./Button/Button";
import Cart from "./Cart/Cart";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import * as SC from "./Header.styled";
import { navigationItems } from "./navigationData";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleNavItemClick = (itemName) => {
    console.log(`Navigating to: ${itemName}`);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <SC.Header>
      <Container>
        <SC.LeftSection>
          <Navigation items={navigationItems} />
        </SC.LeftSection>

        <SC.CenterSection>
          <Logo />
        </SC.CenterSection>

        <SC.RightSection>
          <Cart />
          <Button />
        </SC.RightSection>

        <SC.MobileMenuButton aria-label="Toggle menu" onClick={toggleMobileMenu}>
          <SC.HamburgerIcon isOpen={isMobileMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </SC.HamburgerIcon>
        </SC.MobileMenuButton>
      </Container>

      {isMobileMenuOpen && (
        <SC.MobileMenuOverlay onClick={toggleMobileMenu}>
          <SC.MobileMenu onClick={(e) => e.stopPropagation()}>
            <SC.MobileNavList>
              {navigationItems.map(item => (
                <SC.MobileNavItem
                  key={item.id}
                  onClick={() => handleNavItemClick(item.name)}
                >
                  {item.name}
                </SC.MobileNavItem>
              ))}
            </SC.MobileNavList>
          </SC.MobileMenu>
        </SC.MobileMenuOverlay>
      )}
    </SC.Header>
  );
}
