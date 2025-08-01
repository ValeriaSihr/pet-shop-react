import { useState } from "react";
import Container from "../Container/Container";
import Button from "./Button/Button";
import Cart from "./Cart/Cart";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import * as SC from "./Header.styled" 

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <SC.Header>
            <Container>
                <SC.LeftSection>
                    <Navigation />
                </SC.LeftSection>
                <SC.CenterSection>
                    <Logo />
                </SC.CenterSection>
                <SC.RightSection>
                    <Cart />
                    <Button/>
                </SC.RightSection>
                
                {/* Mobile menu button */}
                <SC.MobileMenuButton onClick={toggleMobileMenu}>
                    <SC.HamburgerIcon isOpen={isMobileMenuOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </SC.HamburgerIcon>
                </SC.MobileMenuButton>
            </Container>
            
            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <SC.MobileMenuOverlay onClick={toggleMobileMenu}>
                    <SC.MobileMenu onClick={(e) => e.stopPropagation()}>
                        <SC.MobileNavList>
                            <SC.MobileNavItem>Home</SC.MobileNavItem>
                            <SC.MobileNavItem>About</SC.MobileNavItem>
                            <SC.MobileNavItem>Product</SC.MobileNavItem>
                            <SC.MobileNavItem>Services</SC.MobileNavItem>
                        </SC.MobileNavList>
                    </SC.MobileMenu>
                </SC.MobileMenuOverlay>
            )}
        </SC.Header>
    )
}