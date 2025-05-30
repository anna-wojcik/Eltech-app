import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { List, Item, Paragraph, Box, Button, Localisation } from "./styled";
import { jobOfferList } from "../../../jobOfferList";
import { setSelectedJobId } from "../careerSlice";

export const JobOffers = () => {
    const dispatch = useDispatch();

    return (
        <>
            <List>
                {jobOfferList.map(({ id, name, city, type }) => (
                    <Item key={id}>
                        <Paragraph $typeStyle>{type}</Paragraph>
                        <Paragraph>{name}</Paragraph>
                        <Box>
                            <Localisation />
                            <Paragraph $marginNone>{city}</Paragraph>
                        </Box>
                        <Link to="/kariera#jobDetail">
                            <Button onClick={() => dispatch(setSelectedJobId(id))}>
                                Sprawdź ofertę
                            </Button>
                        </Link>
                    </Item>
                ))}
            </List>
        </>
    )
};

export default JobOffers;