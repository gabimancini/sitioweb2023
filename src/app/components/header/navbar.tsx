import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <>
            <div className="w-full">
                <div className="container mx-auto px-4">
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
                        <ul className="hidden md:flex gap-x-6 text-white flex items-center">
                            <li>
                                <Link href="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <p>Services</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                            <div className="ml-16 flex">
                                <li className="mr-3.5">
                                    <Link href="/contact">
                                        <FaLinkedin />
                                    </Link>
                                </li>
                                <li className="mr-3.5">
                                    <Link href="/contact">
                                        <FaFacebookSquare />
                                    </Link>
                                </li>
                                <li> 
                                        <Link href="/contact">
                                            <FaInstagramSquare />
                                        </Link>
                                    </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;