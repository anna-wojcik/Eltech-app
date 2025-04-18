import { StyledSection } from "./styled";

export const Section = ({ title, content, body }) => (
    <StyledSection>
        {body}
    </StyledSection>
);

export default Section;