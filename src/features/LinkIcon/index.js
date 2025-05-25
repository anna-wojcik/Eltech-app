import styled from "styled-components"

export const LinkIcon = styled.a`
    color: ${({ theme }) => theme.colors.linkIcon.color};
    transition: color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${({ theme }) => theme.colors.linkIcon.hover};
    }

    &:active {
        color: ${({ theme }) => theme.colors.linkIcon.active};
    }
`;

export const styleIcon = (Icon) => styled(Icon)`
    width: 48px;
    height: 48px;

    @media(max-width: 720px) {
		width: 32px;
        height: 32px;
	}
`;