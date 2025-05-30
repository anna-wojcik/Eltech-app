import { StyledFooter, Paragraph, Span, ListIcons, Wrapper } from "./styled";
import Logo from "../Logo";
import { socials } from "../../socials";
import { LinkIcon } from "../LinkIcon";
import { companyInfo } from "../../companyInfo";

export const Footer = () => (
    <StyledFooter>
        <Wrapper>
            <Logo />
            <Paragraph>
                <Span>{companyInfo.name}</Span> z siedzibą w Lublinie adres: {companyInfo.address}, {companyInfo.postalCode} {companyInfo.city}, nr KRS {companyInfo.krsNumber}, NIP: {companyInfo.nipNumber}, REGON: {companyInfo.regonNumber}
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
                {companyInfo.name} 20225. Wszelkie prawa zastrzeżone
            </Paragraph>
            <Paragraph $smallFont>
                Projekt i wykonanie: Anna Wójcik
            </Paragraph>
        </Wrapper>
    </StyledFooter>
);

export default Footer;