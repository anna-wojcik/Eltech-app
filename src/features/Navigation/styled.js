import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const StyledNavigation = styled.nav`
    ${({ $sidebar }) => $sidebar && css`
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 1000;
        box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    `}
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    ${({ $noSidebar }) => $noSidebar && css`
        display: flex;
        justify-content: space-between;
        gap: 60px;
    `}

    ${({ $sidebar }) => $sidebar && css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: white;
        width: 250px;
        gap: 24px;
        padding: 20px;

        @media(max-width: 400px) {
            width: 100vw;
        }
    `}
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
`;

export const ButtonMenu = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;