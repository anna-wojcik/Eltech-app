import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "./url";

export const useCurrencyData = () => {
    const [data, setData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getCurrencyData = async () => {
            try {
                const response = await axios.get("currencyApi.json");
                const currencyData = await response.data;
                setData({
                    state: "success",
                    currencyData,
                });
            } catch (error) {
                setData({
                    state: "error",
                });
            }
        };
        setTimeout(getCurrencyData, 1000);
    }, []);

    return data;
};