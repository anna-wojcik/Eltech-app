import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledLinkButton = styled(Link)`
    height: 93px;
    width: 342px;
    background-color: ${({ theme }) => theme.colors.linkButton.background};
    background-image: linear-gradient(28deg, rgba(80, 100, 226, 1) 0%,rgb(223, 24, 251) 100%);
    color:#ffffff;
    border-radius: 50px;
    border: none;
    box-shadow: 3px 3px 16px -4px ${({ theme }) => theme.colors.linkButton.boxShadow};
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    &:hover {
        width: 400px;
        background-color: ${({ theme }) => theme.colors.linkButton.backgroundHover};
        background-image: linear-gradient(28deg,rgb(33, 136, 255) 0%,rgb(223, 24, 251) 100%);
        transition: width 0.2s linear;
    }

    &:active {
        background: ${({ theme }) => theme.colors.linkButton.backgroundActive};
        transition: background 1s linear;
    }

    @media(max-width: 1024px) {
        height: 70px;
        font-size: 20px;
        width: 300px;
    }

    @media(max-width: 850px) {
        margin: 20px 0;
        height: 60px;
        font-size: 16px;
        width: 242px;

        &:hover {
            width: 300px;
        }
    }

    @media(max-width: 480px) {
        height: 50px;
        font-size: 14px;
        width: 200px;

        &:hover {
            width: 258px;
        }
    }
`;