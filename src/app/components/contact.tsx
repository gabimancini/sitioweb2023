import Link from "next/link";
import { BsTelephoneFill } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';
import { BiSolidTimeFive } from 'react-icons/bi';

type ContactInfoTypoe = {
    className: string
}
const Contact = (props: ContactInfoTypoe) => {
    const {className}=props;
    return (
        <>
            <Link href="tel:+14845428274" className={className}>
                <BsTelephoneFill className="inline-block mr-2" /><span>+14845428274</span>
            </Link>
            <Link href="mailto:info@devmagister.com" className={className}>
                <BsEnvelopeFill className="inline-block mr-2" /><span>info@devmagister.com</span>
            </Link>
            <Link href="#" className={className}>
                <BiSolidTimeFive className="inline-block mr-2" /><span>Mon - Fri 9:00am at 6:00pm</span>
            </Link>
        </>
    )
}
export default Contact;