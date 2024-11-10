"use client"

import Link from "next/link";
import "../style/header.css";
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div>
                {/* <img className="logo" src="../Aisha-logo.png" alt="logo" /> */}

                <Image
                    src="/Aisha-logo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="logo"
                />
            </div>
            <nav className="nav">
                {/* Hamburger icon for mobile */}
                <button
                    className="menuIcon"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation links */}
                <ul className={`navBar ${menuOpen ? "active" : ""}`}>
                    <li className="li">
                        <Link className="link" href="/">Home</Link> </li>
                    <li className="li">
                        <Link className="link" href="/about">About</Link> </li>
                    {/* <li className="li"> */}
                    {/* <Link className="link" href="/portfolio">Portfolio</Link></li> */}
                    <li className="li">
                        <Link className="link" href="/contact">Contact</Link>
                    </li>
                    <li>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="downloadLink">
                            <button className="btn1">Download CV
                                <AiOutlineCloudDownload className="download" />
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
