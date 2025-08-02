import * as SC from './Navigation.styled';

// Fallback навігаційні пункти, якщо items не передаються
const defaultItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Product', path: '/product' },
    { id: 4, name: 'Services', path: '/services' }
];

export default function Navigation({ items = defaultItems }) {
    const handleNavItemClick = (itemName) => {
        console.log(`Desktop navigation to: ${itemName}`);
        // Тут можна додати навігацію до відповідних сторінок
    };

    return (
        <SC.Navigation>
            <SC.NavList>
                {items.map(item => (
                    <SC.NavItem 
                        key={item.id}
                        onClick={() => handleNavItemClick(item.name)}
                    >
                        {item.name}
                    </SC.NavItem>
                ))}
            </SC.NavList>
        </SC.Navigation>
    );
}