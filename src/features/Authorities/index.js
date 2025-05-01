import { Item, List, Image, Name, Role, Box } from "./styled";
import { authoritiesList } from "../../authoritiesList";

export const Authorities = () => (
    <>
        <List>
            {authoritiesList.map(({ name, role, image }) => (
                <Item key={image}>
                    <Image src={image} alt={name}></Image>
                    <Box>
                        <Name>{name}</Name>
                        <Role>{role}</Role>
                    </Box>
                </Item>
            ))}
        </List>
    </>
);

export default Authorities;