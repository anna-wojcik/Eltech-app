import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    font-size: 40px;
    font-weight: 800;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.logo.main};

    &:hover {
        color: ${({ theme }) => theme.colors.logo.hover};
    };

    &:active {
        color: ${({ theme }) => theme.colors.logo.clicked};
    };
`;