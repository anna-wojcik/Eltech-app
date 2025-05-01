import { Paragraph } from "./style";
import { useCurrentDate } from "./useCurrentDate";

export const DateTime = () => {
    const date = useCurrentDate();    

    const dayNumeric = date.getDay();
    const monthLong = date.toLocaleDateString("pl-PL", {month: "long"});
    const yearNumeric = date.getFullYear();
    const time = date.toLocaleTimeString("pl-PL");

    return (
        <Paragraph>
            Aktualizacja: {dayNumeric} {monthLong} {yearNumeric}, {time}
        </Paragraph>
    )
};

export default DateTime;