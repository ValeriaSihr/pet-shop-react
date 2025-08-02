import { useState } from "react";
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
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavItemClick = (itemName) => {
        console.log(`Navigating to: ${itemName}`);
        setIsMobileMenuOpen(false);
        // Тут можна додати навігацію до відповідних сторінок
    };

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
                            {navigationItems.map(item => (
                                <SC.MobileNavItem 
                                    key={item.id}
                                    onClick={() => handleNavItemClick(item.name)}
                                    onTouchEnd={() => handleNavItemClick(item.name)}
                                >
                                    {item.name}
                                </SC.MobileNavItem>
                            ))}
                        </SC.MobileNavList>
                    </SC.MobileMenu>
                </SC.MobileMenuOverlay>
            )}
            {/* Prevent body scroll when menu is open */}
            {isMobileMenuOpen && (
                <style jsx global>{`
                    body {
                        overflow: hidden;
                        position: fixed;
                        width: 100%;
                    }
                `}</style>
            )}
        </SC.Header>
    );
}