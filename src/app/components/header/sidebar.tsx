import Link from "next/link";
import Links from "../links";
import SocialIcons from "../social_icons";
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
                className="sidebar-container fixed w-[90%] rounded-xl  overflow-hidden flex flex-col items-center bg-white text-black left-[50%] right-[50%] translate-x-[-50%] translate-y-[10px] z-10"
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
                    <Links className=""/>
                    <div className="py-3.5 flex">
                        <SocialIcons fontSize={32}/>
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