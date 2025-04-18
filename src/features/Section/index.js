import { BlackContent, Description, StyledSection, Title } from "./styled";

export const Section = ({ isMiddle, title, extraTitle, content, body }) => (
    <StyledSection $displayMiddle={isMiddle}>
        <Title>
            {title}
            <br />
            <BlackContent>{extraTitle}</BlackContent>
        </Title>
        <Description>{content}</Description>
        {body}
    </StyledSection>
);

export default Section;