import * as SC from './Navigation.styled';

export default function Navigation() {
    return <SC.Navigation>
        <SC.NavList>
            <SC.NavItem>Home</SC.NavItem>
            <SC.NavItem>About</SC.NavItem>
            <SC.NavItem>Product</SC.NavItem>
            <SC.NavItem>Servies</SC.NavItem>
        </SC.NavList>
    </SC.Navigation>
}