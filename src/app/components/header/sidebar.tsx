import Link from "next/link";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
const Sidebar = ({
    isOpen,
    toggle,
}: {
    isOpen: boolean;
    toggle: () => void;
}): JSX.Element => {
    return (
        <>
            <div
                className="sidebar-container fixed w-[90%] rounded-xl  overflow-hidden flex flex-col items-center bg-white text-black left-[50%] right-[50%] translate-x-[-50%] translate-y-[20px] z-10"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <button className="pb-10 pt-20" onClick={toggle}>
                    {/* Close icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 23L22.2132 1.7868" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <path d="M1 1L22.2132 22.2132" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <ul className="sidebar-nav text-center leading-relaxed text-lg font-semibol">
                    <li>
                        <Link href="/" onClick={toggle} className="py-3.5 inline-block">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={toggle} className="py-3.5 inline-block">
                            <p>About Us</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" onClick={toggle} className="py-3.5 inline-block">
                            <p>Services</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" onClick={toggle} className="py-3.5 inline-block">
                            <p>Contacts</p>
                        </Link>
                    </li>
                    <div className="py-3.5 flex">
                                <li>
                                    <Link href="/" target="_blank" className="px-3.5 inline-block">
                                        <FaLinkedin className='w-[30px] h-[30px]'/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" target="_blank" className="px-3.5 inline-block">
                                        <FaFacebookSquare className='w-[30px] h-[30px]' />
                                    </Link>
                                </li>
                                <li>
                                        <Link href="/" target="_blank" className="px-3.5 inline-block">
                                            <FaInstagramSquare className='w-[30px] h-[30px]' />
                                        </Link>
                                    </li>
                            </div>
                </ul>
                <Link href="mailto:info@devmagister.com" className="pb-3.5">
                 <span>info@devmagister.com</span>
            </Link>
            </div>
        </>
    );
};

export default Sidebar;