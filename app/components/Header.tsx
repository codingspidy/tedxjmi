'use client'
import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, } from '@fortawesome/free-solid-svg-icons'
import UnicusLogo from "../images/tedxjmi-logo.png"

const Header: NextComponentType = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
    return (
        <>
            <header id="navbar" className={`bg-black py-4 ${scroll ? "fixed w-full top-0 z-[99] header-fixed transition-all ease-in-out" : "fixed w-full top-0 z-[99] transition-all ease-in-out"}`}>
                <div className="innerDiv mx-auto">
                    <nav className="flex justify-between lg:items-center">
                        {/* <a className="inline-block py-4">
                            <Image src={UnicusLogo} alt="" className="object-cover w-[110px] md:w-[120px]" />
                        </a> */}
                        <div className=''>
                            <div className="flex items-start">
                                <span className="text-[#FF2B06] leading-none font-[700] lg:text-[30px] md:text-[24px] text-[20px]">
                                    TED
                                </span>
                                <span className="text-[#FF2B06] leading-none font-[700] lg:text-[16px] md:text-[13px] text-[11px]">
                                    x
                                </span>
                                <span className="text-white ml-[2px] leading-none font-[700] lg:text-[30px] md:text-[24px] text-[20px]">
                                    JMI
                                </span>
                            </div>
                            <div className='mt-1 text-white text-[10px] lg:text-[11px]'>
                                <span className='text-primary text-[11px] lg:text-xs'>x </span>
                                = independently organised events
                            </div>
                        </div>
                        <div className="inline-flex items-center">
                            <div className="lg:block hidden">
                                <ul className="flex items-center gap-x-5 text-[15px] text-white">
                                    <li className="px-2 py-2">
                                        <Link href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2">
                                        <Link href="/">
                                            About
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2">
                                        <Link href="/">
                                            Our team
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2">
                                        <Link href="/">
                                            Alumni
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2 cursor-pointer">
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2 cursor-pointer">
                                        <Link href="/contact">
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <a
                                className="inline-block lg:hidden cursor-pointer menu-icon"
                                onClick={() => {
                                    setShowMenu(!showMenu);
                                }}
                            >
                                <FontAwesomeIcon icon={faBars} className="text-[24px] text-white" />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            <div className={`mobile-menu bg-black transform transition-transform duration-300 ease-in-out ${showMenu ? " fixed effect-code inset-0 w-full sm:h-full h-screen z-[9999] translate-x-0 py-8 sm:overflow-y-visible overflow-y-scroll" : "py-8 fixed inset-0 w-full sm:h-full h-screen z-[9999] effect-code translate-x-full sm:overflow-y-visible overflow-y-scroll"}`}>
                <a
                    className="cursor-pointer text-white absolute top-5 right-4"
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} className="text-[27px]" />
                </a>

                <ul className="min-h-[80%] flex flex-col justify-center items-center gap-y-5 text-[19px] text-white">
                <li className="px-2 py-2">
                                        <Link href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2">
                                        <Link href="/">
                                            About
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2">
                                        <Link href="/">
                                            Our team
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2">
                                        <Link href="/">
                                            Alumni
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2 cursor-pointer">
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2 cursor-pointer">
                                        <Link href="/contact">
                                            Register
                                        </Link>
                                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
