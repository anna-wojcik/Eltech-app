import { useState } from "react";
import { ButtonMenu, Menu, Paragraph, Phone, StyledHeader, Wrapper } from "./styled";
import Navigation from "../Navigation";
import Logo from "../Logo";
import ThemeSwitch from "../ThemeSwitch";
import { phoneNumber } from "../../phoneNumber";
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
                        <Menu />
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
                    <Phone />
                    <Paragraph>{phoneNumber}</Paragraph>
                </Wrapper>
                <ThemeSwitch />
            </Wrapper>
        </StyledHeader>
    )
};

export default Header;