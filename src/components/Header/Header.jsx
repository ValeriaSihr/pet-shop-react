import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

export default function Header() {
    return <header>
        <Container>
            <Navigation/>
            <Logo />
            <Cart />
            <Button/>                
        </Container>
    </header>
}