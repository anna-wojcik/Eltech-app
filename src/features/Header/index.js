import { Paragraph, StyledHeader, Wrapper } from "./styled";
import phoneIcon from "../../images/phone.svg";
import Navigation from "../Navigation";
import Logo from "../Logo";
import ThemeSwitch from "../ThemeSwitch";
import { phoneNumber } from "../../phoneNumber";

export const Header = () => (
    <StyledHeader>
        <div>
            <Logo />
        </div>
        <div>
            <Navigation />
        </div>
        <Wrapper>
            <Wrapper $phoneWrapper>
                <img src={phoneIcon} height={24} />
                <Paragraph>{phoneNumber}</Paragraph>
            </Wrapper>
            <ThemeSwitch />
        </Wrapper>
    </StyledHeader>
);

export default Header;