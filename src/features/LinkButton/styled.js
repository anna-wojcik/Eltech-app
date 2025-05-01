import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledLinkButton = styled(Link)`
    height: 93px;
    width: 342px;
    background-color: rgba(80, 100, 226, 1);
    background-image: linear-gradient(28deg, rgba(80, 100, 226, 1) 0%, rgba(223, 24, 251, 1) 100%);
    color:#ffffff;
    border-radius: 50px;
    border: none;
    box-shadow: 3px 3px 16px -4px rgba(37, 37, 37, 1);
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    &:hover {
        width: 400px;
        background-color: rgba(33, 136, 255, 1);
        background-image: linear-gradient(28deg, rgba(33, 136, 255, 1) 0%, rgba(223, 24, 251, 1) 100%);
        transition: width 0.2s linear;
    }

    &:active {
        background: rgba(33, 136, 255, 1);
        transition: background 1s linear;
    }

    @media(max-width: 1024px) {
        height: 70px;
        font-size: 20px;
        width: 300px;

        &:hover {
            width: 358px;
            background-color: rgba(33, 136, 255, 1);
            background-image: linear-gradient(28deg, rgba(33, 136, 255, 1) 0%, rgba(223, 24, 251, 1) 100%);
            transition: width 0.2s linear;
        }

        &:active {
            background: rgba(33, 136, 255, 1);
            transition: background 0.2s linear;
        }
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