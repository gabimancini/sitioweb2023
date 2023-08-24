"use client";
import Button from "../button";
import { useState } from 'react';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Logo from "./logo";
const Navigation = () => {
    // toggle sidebar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="w-full">
                <div className="container mx-auto px-4 py-[18px]">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        {!isOpen ?
                            <Button
                                type="button"
                                className="inline-flex items-center md:hidden"
                                onclick={toggle}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                    <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                    />
                                </svg>
                            </Button>
                            : <Button
                                type="button"
                                className="inline-flex items-center md:hidden"
                                onclick={toggle}
                            >
                                <svg width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M1 23L22.2132 1.7868" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    <path d="M1 1L22.2132 22.2132" stroke="white" stroke-width="2" stroke-linecap="round" />
                                </svg></Button>
                        }


                        {isOpen ? <Sidebar /> : <Navbar />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;