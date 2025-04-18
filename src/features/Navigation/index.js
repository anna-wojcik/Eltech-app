import { List, StyledNavLink } from "./styled";

const Navigation = () => (
    <nav>
        <List>
            <li>
                <StyledNavLink to="/oferta">Oferta</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/o-nas">O Nas</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/kariera">Kariera</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
            </li>
        </List>
    </nav>
);

export default Navigation;