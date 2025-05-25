import { useDispatch, useSelector } from "react-redux";
import { StyledButton, Box } from "./styled";
import { ReactComponent as SunLight } from "../../images/sunLight.svg";
import { ReactComponent as SunDark } from "../../images/sunDark.svg";
import { toggleTheme, selectIsDark } from "./themeSlice";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(selectIsDark);

    return (
        <StyledButton onClick={() => dispatch(toggleTheme())}>
            <Box $flicker $move={isDark}></Box>
            <Box $sun $move={isDark}>
                {isDark ? <SunDark /> : <SunLight />}
            </Box>
        </StyledButton>
    )
};

export default ThemeSwitch;