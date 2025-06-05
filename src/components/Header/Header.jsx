import Container from "../Container/Container";
import Button from "./Button/Button";
import Cart from "./Cart/Cart";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import * as SC from "./Header.styled" 



export default function Header() {
    return <SC.Header>
        <Container>
            <Navigation/>
            <Logo />
            <Cart />
            <Button/>                
        </Container>
    </SC.Header>
}