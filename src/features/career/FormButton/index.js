import { StyledButton } from "./styled";

export const FormButton = ({ content, feature }) => (
    <StyledButton $inForm={feature === "inForm"} $inSummary={feature === "inSummary"}>
        {content}
    </StyledButton>
);

export default FormButton;