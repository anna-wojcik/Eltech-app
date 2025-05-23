import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { jobOfferList } from "../../../jobOfferList";
import { ButtonShowForm, Container, Item, List, Paragraph, Title, Wrapper } from "./styled";
import { StyledSection } from "../../StyledSection";
import { selectSelectedJobId } from "../careerSlice";

export const JobDetail = () => {
    const selectedJobId = useSelector(selectSelectedJobId);
    const selectedJob = jobOfferList.find(job => job.id === selectedJobId);

    return (
        <>
            <div id="jobDetail">
                <Container>
                    <Paragraph>Aktualnie poszukujemy kandydatów na stanowisko:</Paragraph>
                    <Paragraph $pink>{selectedJob.name}</Paragraph>
                    <Paragraph $fontLight>Miejsce pracy: {selectedJob.city}</Paragraph>
                </Container>
                <StyledSection>
                    <Title>Nasze oczekiwania:</Title>
                    <List>
                        {selectedJob.expectactions.map((expectaction, id) => (
                            <Item key={id}>{expectaction}</Item>
                        ))}
                    </List>
                </StyledSection>
                <StyledSection>
                    <Title>Co będzie należało do twoich zadań:</Title>
                    <List>
                        {selectedJob.tasks.map((task, id) => (
                            <Item key={id}>{task}</Item>
                        ))}
                    </List>
                    <Wrapper>
                        <Link to="/formularz-aplikacyjny">
                            <ButtonShowForm>APLIKUJ</ButtonShowForm>
                        </Link>
                    </Wrapper>
                </StyledSection>
            </div>
        </>
    )
};

export default JobDetail;