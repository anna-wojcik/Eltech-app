import { useSelector } from "react-redux";
import { useEffect } from "react";
import { StyledSection } from "../../StyledSection";
import { Title } from "./styled";
import JobOffers from "../JobOffers";
import JobDetail from "../JobDetail";
import { selectSelectedJobId } from "../careerSlice";

export default () => {
    const selectedJobId = useSelector(selectSelectedJobId);

    useEffect(() => {
        if (selectedJobId) {
            const element = document.getElementById("jobDetail");
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [selectedJobId]);

    return (
        <>
            <StyledSection>
                <Title>Oferta pracy</Title>
                <JobOffers />
            </StyledSection>

            {selectedJobId && (
                <JobDetail />
            )}
        </>
    )
};