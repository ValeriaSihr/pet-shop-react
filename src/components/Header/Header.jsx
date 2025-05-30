import Container from "../Container/Container";
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