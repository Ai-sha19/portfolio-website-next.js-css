
import React from 'react'
import "../style/banner.css";
import Link from 'next/link';
import Image from 'next/image';


const Banner = () => {
    return (
        <main className='main'>
            {/* left */}
            <div className='left'>
                <h2 className='hello'>Hello,</h2>
                <h1 className='myName'>I&apos;m Aisha</h1>
                <h2 className='skill'>Developer & Graphic Designer</h2>
                <p className='skillPara'>
                    A Graphic Designer, UI/UX Designer, and Full Stack Developer with a Level 2 Seller status on Fiverr. Currently, I&apos;m studying Generative AI and Web 3.0 to enhance my skills. I take pride in delivering exceptional designs and impactful digital experiences for my clients.
                </p>

                <div className='btn2Container'>
                    <Link href="../contact">
                        <button className="btn2">Hire me</button></Link>
                </div>
            </div>
            {/* Right */}
            <div className='right'>
                <div>
                    {/* <img className="banner" src="../banner-img.png" alt="logo" /> */}
                    <Image src="/banner-img.png" alt="about" width={500} height={600} />

                </div>
            </div>
        </main>
    )
}

export default Banner
