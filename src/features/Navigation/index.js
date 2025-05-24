import { ButtonMenu, List, StyledNavigation, StyledNavLink } from "./styled";
import { useWindowDimensions } from "../../useWindowDimensions";
import crossIcon from "../../images/cross.svg";

const Navigation = ({ setShowSidebar }) => {
    const width = useWindowDimensions();

    if (width < 1100) {
        return (
            <StyledNavigation $sidebar="sidebar">
                <List $sidebar="sidebar">
                    <li>
                        <ButtonMenu onClick={() => setShowSidebar(false)}>
                            <img src={crossIcon} alt="Cross icon" />
                        </ButtonMenu>
                    </li>
                    <li onClick={() => setShowSidebar(false)}>
                        <StyledNavLink to="/oferta">Oferta</StyledNavLink>
                    </li>
                    <li onClick={() => setShowSidebar(false)}>
                        <StyledNavLink to="/o-nas">O Nas</StyledNavLink>
                    </li>
                    <li onClick={() => setShowSidebar(false)}>
                        <StyledNavLink to="/kariera">Kariera</StyledNavLink>
                    </li>
                    <li onClick={() => setShowSidebar(false)}>
                        <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
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