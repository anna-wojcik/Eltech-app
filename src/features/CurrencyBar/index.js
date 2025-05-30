import { useWindowDimensions } from "../../useWindowDimensions";
import { Item, List, Paragraph, StyledSection } from "./styled";
import { useCurrencyData } from "./useCurrencyData";

export const CurrencyBar = () => {
    const width = useWindowDimensions();
    const data = useCurrencyData();
    
    const getContainerState = () => {
        if (data.state === 'loading') {
            return (
                <Paragraph>Ładowanie kursu walut...</Paragraph>
            )
        } else if (data.state === 'success') {
            const currencies = Object.values(data.currencyData.data);
            return (
                <List>
                    {currencies.map((currency, index) => (
                        <Item key={index}>
                            1 PLN &rarr; {currency.code} {currency.value.toFixed(2)}
                        </Item>
                    ))}
                </List>
            )
        } else if (data.state === 'error') {
            return (
                <Paragraph>Ooops! Coś poszło nie tak, nie można załadować kursu walut</Paragraph>
            )
        }
    }

    if (width < 1300) {
        return null;
    }

    return (
        <StyledSection>
            {getContainerState()}
        </StyledSection>
    )
};

export default CurrencyBar;