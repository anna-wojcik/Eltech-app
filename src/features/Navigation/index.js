import { ButtonMenu, Cross, List, StyledNavigation, StyledNavLink } from "./styled";
import { useWindowDimensions } from "../../useWindowDimensions";

const Navigation = ({ setShowSidebar }) => {
    const width = useWindowDimensions();

    if (width < 1100) {
        return (
            <StyledNavigation $sidebar="sidebar">
                <List $sidebar="sidebar">
                    <li>
                        <ButtonMenu onClick={() => setShowSidebar(false)}>
                            <Cross />
                        </ButtonMenu>
                    </li>
                    <li>
                        <StyledNavLink to="/oferta" onClick={() => setShowSidebar(false)}>Oferta</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/o-nas" onClick={() => setShowSidebar(false)}>O Nas</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/kariera" onClick={() => setShowSidebar(false)}>Kariera</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/kontakt" onClick={() => setShowSidebar(false)}>Kontakt</StyledNavLink>
                    </li>
                </List>
            </StyledNavigation>
        )
    }

    return (
        <StyledNavigation $noSidebar="noSidebar">
            <List $noSidebar="noSidebar">
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
        </StyledNavigation>
    )
};

export default Navigation;