import styled from "styled-components"

export const LinkIcon = styled.a`
    color: #FFFFFF;
    transition: color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: #DF18FB;
    }

    &:active {
        color: #F18EFF;
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