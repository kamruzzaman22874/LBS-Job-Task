"use client"
import Image from "next/image";
import logo from "../../../public/logo.webp"
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="md:hidden py-6" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {
                        isOpen ? <XMarkIcon className="h-10 w-10 text-blue-500" /> :
                            <Bars3Icon className="h-10 w-10 text-blue-500" />
                    }
                </span>
            </div>
            <div className="flex w-full bg-[#F8F8F8] md:shadow-xl md:justify-between  p-2 items-center px-10 md:fixed top-0 z-10">
                <div>
                    <Image priority={false} className="hidden md:block" src={logo} alt="logo" />
                </div>
                <div>
                    <ul className={`md:flex absolute  items-center md:static duration-500 px-3 space-y-2 md:space-y-0 py-2 ${isOpen ? 'left-0' : '-left-20'}`}>
                        <li className="mr-8">
                            <Link href="/"> Home</Link>
                        </li>
                        <li className="mr-8">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="mr-8">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="mr-8">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <div className="hidden md:block">
                            <button className={`bg-[#DB1C29] main-angel  hover:bg-[#0A2761]  text-white transition-all duration-300 px-6 py-3 uppercase `}><p className="get-btn">Get estimation</p></button>
                        </div>
                    </ul>
                </div>
            </div >
        </>

    );
};

export default Navbar;