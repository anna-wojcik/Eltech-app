import { useState } from "react";
import { ButtonMenu, Paragraph, StyledHeader, Wrapper } from "./styled";
import phoneIcon from "../../images/phone.svg";
import Navigation from "../Navigation";
import Logo from "../Logo";
import ThemeSwitch from "../ThemeSwitch";
import { phoneNumber } from "../../phoneNumber";
import menuIcon from "../../images/menu.svg";
import { useWindowDimensions } from "../../useWindowDimensions";

export const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const width = useWindowDimensions();

    if (width < 1100) {
        return (
            <StyledHeader>
                <Logo />
                {showSidebar && (
                    <Navigation
                        setShowSidebar={setShowSidebar}
                    />
                )}
                <Wrapper>
                    <ThemeSwitch />
                    <ButtonMenu onClick={() => setShowSidebar(true)}
                    >
                        <img src={menuIcon} alt="Menu icon" />
                    </ButtonMenu>
                </Wrapper>
            </StyledHeader>
        )
    }

    return (
        <StyledHeader>
            <Logo />
            <Navigation />
            <Wrapper>
                <Wrapper $phoneWrapper>
                    <img src={phoneIcon} height={24} />
                    <Paragraph>{phoneNumber}</Paragraph>
                </Wrapper>
                <ThemeSwitch />
            </Wrapper>
        </StyledHeader>
    )
};

export default Header;