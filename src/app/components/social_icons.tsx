import Link from "next/link";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
type SocialIconsType = {
    fontSize: number;
}
const SocialIcons = (props: SocialIconsType) => { 
    const {fontSize} = props;
    return (
        <>
            <li className="mr-[14px]">
                <Link href="/" target="_blank" >
                    <FaLinkedin font-size={fontSize} />
                </Link>
            </li>
            <li className="mr-[14px]">
                <Link href="/" target="_blank">
                    <FaFacebookSquare font-size={fontSize} />
                </Link>
            </li>
            <li>
                <Link href="/" target="_blank">
                    <FaInstagramSquare  font-size={fontSize}/>
                </Link>
            </li>
        </>
    )
}
export default SocialIcons;