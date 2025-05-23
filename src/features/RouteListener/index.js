import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { setSelectedJobId } from "../career/careerSlice";

export const RouteListener = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const isOnCareerPage = location.pathname.includes("/kariera") || location.pathname.includes("/formularz-aplikacyjny");

        if (!isOnCareerPage) {
            dispatch(setSelectedJobId(null));
        }
    }, [location.pathname, dispatch]);

    return null;
}

export default RouteListener;