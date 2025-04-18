import { List, StyledLink, Title, Icon } from "./styled";
import { services } from "../../services";

export const ServiceList = () => (
    <List>
        {
            services.map(({ name, icon, path }) => (
                <li key={name}>
                    <StyledLink to={path}>
                        <Icon src={icon} alt={name}></Icon>
                        <Title>{name}</Title>
                    </StyledLink>
                </li>
            ))
        }
    </List>
);

export default ServiceList;