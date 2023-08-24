import Link from "next/link";
import Links from "../links";
import SocialIcons from "../social_icons";
const Sidebar = () => {
    return (
        <>
            <ul className= {`"
                sidebar-nav
                absolute top-[84px] right-[50%] left-[50%]
                w-[90%]
                translate-x-[-50%] translate-y-[10px]
                flex flex-col items-center
                text-center text-lg text-black font-semibol 
                rounded-xl
                bg-white
                overflow-hidden
                z-10
                pt-[15px]
                "`}>
                <Links className="inline-block pt-[18px]" />
                <div className="py-3.5 pt-[18px] flex">
                    <SocialIcons fontSize={32} />
                </div>
                <Link href="mailto:info@devmagister.com" className="pb-3.5">
                    <span>info@devmagister.com</span>
                </Link>
            </ul>
        </>
    );
};

export default Sidebar;