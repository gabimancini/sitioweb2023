import React from "react";
import Logo from "./logo";
import Links from "../links";
import SocialIcons from "../social_icons";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <>
            <div className="w-full">
                <div className="container mx-auto px-4 py-[18px]">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <button
                            type="button"
                            className="inline-flex items-center md:hidden kol"
                            onClick={toggle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#fff"
                                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                />
                            </svg>
                        </button>
                        <ul className="hidden md:flex gap-x-6 text-white flex items-center text-lg font-semibol">
                            <Links />
                            <div className="ml-16 flex">
                                <SocialIcons />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;