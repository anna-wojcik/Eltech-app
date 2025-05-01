import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

export const ScrollHandler = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo({top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollHandler;