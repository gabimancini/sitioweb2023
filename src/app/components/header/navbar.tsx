import React from "react";
import Logo from "./logo";
import Links from "../links";
import SocialIcons from "../social_icons";

const Navbar = () => {
    return (
        <ul className="hidden md:flex gap-x-6 text-white flex items-center text-lg font-semibol">
            <Links className="" />
            <div className="ml-16 flex">
                <SocialIcons fontSize={27.1} />
            </div>
        </ul>
    );
};

export default Navbar;