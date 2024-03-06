import { IconType } from "react-icons"
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaLinkedin } from "react-icons/fa";


type footerData = {
    icon: IconType,
    link: string
}

export const FOOTER_DATA: footerData[] = [
    {
        icon: ImFacebook2,
        link: 'https://www.facebook.com/'
    },
    {
        icon: FaInstagram,
        link: 'https://www.instagram.com/'
    },
    {
        icon: FaTwitter,
        link: 'https://twitter.com/'
    },
    {
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/'
    }
]