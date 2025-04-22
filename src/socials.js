import { ReactComponent as FacebookIcon } from "./images/facebookIcon.svg";
import { ReactComponent as InstagramIcon } from "./images/instagramIcon.svg";
import { styleIcon } from "./features/LinkIcon";

export const socials = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        Icon: styleIcon(InstagramIcon),
    }
];