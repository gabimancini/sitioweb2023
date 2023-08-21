import Link from "next/link";
import { BsTelephoneFill } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';
import { BiSolidTimeFive } from 'react-icons/bi';

const HeroInfo = () => {
    return (
        <div className="max-w-[954px] m-auto text-white flex justify-between mt-14 md:mt-32 text-sm flex-col md:flex-row  items-center md:items-start">
            <Link href="tel:+14845428274" className="py-0.5">
                <BsTelephoneFill className="inline-block mr-2" /><span>+14845428274</span>
            </Link>
            <Link href="mailto:info@devmagister.com" className="py-0.5">
                <BsEnvelopeFill className="inline-block mr-2" /><span>info@devmagister.com</span>
            </Link>
            <Link href="#" className="py-0.5">
                <BiSolidTimeFive className="inline-block mr-2" /><span>Mon - Fri 9:00am at 6:00pm</span>
            </Link>
        </div>
    )
}
export default HeroInfo;