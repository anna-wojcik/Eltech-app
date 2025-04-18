import { StyledButton, Box } from "./styled";
import sunIcon from "../../images/sun.svg";

export const ThemeSwitch = () => (
    <StyledButton>
        <Box $flicker></Box>
        <Box $sun>
            <img src={sunIcon} />
        </Box>
    </StyledButton>
);

export default ThemeSwitch;