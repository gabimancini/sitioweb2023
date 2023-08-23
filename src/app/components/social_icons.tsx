import Link from "next/link";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <>
            <li className="mr-3.5">
                <Link href="/" target="_blank">
                    <FaLinkedin />
                </Link>
            </li>
            <li className="mr-3.5">
                <Link href="/" target="_blank">
                    <FaFacebookSquare />
                </Link>
            </li>
            <li>
                <Link href="/" target="_blank">
                    <FaInstagramSquare />
                </Link>
            </li>
        </>
    )
}
export default SocialIcons;