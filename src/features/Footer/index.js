import { StyledFooter, Paragraph, Span, ListIcons, Wrapper } from "./styled";
import Logo from "../Logo";
import { socials } from "../socials";
import { LinkIcon } from "../LinkIcon";

export const Footer = () => (
    <StyledFooter>
        <Wrapper>
            <Logo />
            <Paragraph>
                <Span>ELTECH sp. z o.o.</Span> z siedzibą w Lublinie adres: ul. Prezydenta Gabriela Narutowicza 18/3, 20-004 Lublin, nr KRS 0000826013, NIP: 7123398771, REGON: 385414795
            </Paragraph>
        </Wrapper>
        <Wrapper $secondWrapper>
            <ListIcons>
                {socials.map(({ name, url, Icon }) => (
                    <li key={name}>
                        <LinkIcon href={url} title={name} target="_blank" rel="noreferrer">
                            <Icon />
                        </LinkIcon>
                    </li>
                ))}
            </ListIcons>
            <Paragraph $smallFont>
                ELTECH sp. z o. o. © 20225. Wszelkie prawa zastrzeżone
            </Paragraph>
            <Paragraph $smallFont>
                Projekt i wykonanie: Anna Wójcik
            </Paragraph>
        </Wrapper>
    </StyledFooter>
);

export default Footer;