import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #171717;
    font-size: 20px;
    font-weight: 400;

    &.active {
        color: #5064E2;
        border-bottom: 3px solid #5064E2;
        padding-bottom: 10px;
        transition: padding 0.1s linear;
    }
    &:hover {
        color: #5064E2;
        border-bottom: 3px solid #5064E2;
        padding-bottom: 10px;
        transition: padding 0.1s linear;
    }

    @media(max-width: 1100px){
        display: none; // w kompnencie to zrobić if window.width <
    }
`;