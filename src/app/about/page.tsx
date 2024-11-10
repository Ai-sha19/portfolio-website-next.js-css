import Link from 'next/link'
import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'
import "../../style/about.css";


const About = () => {
  return (
    <main className='main'>
      {/* Left */}
      <div className='left'>
        <img src="/about-pic.jpg" alt="about" />
      </div>
      {/* Right */}
      <div className='right'>
        <div className="heading-container">
          <h4 className="h4">Professional Freelance Designer & Developer</h4>
          <h1 className="h1">About Me</h1>
        </div>

        <div className='stars'>
          <span className='main-span'>
            <IoMdStar className='star' />
            <IoMdStar className='star' />
            <IoMdStar className='star' />
            <IoMdStar className='star' />
            <IoMdStarHalf className='star' />

            <span className="rating">4.9 | (73) Reviews</span>
          </span>
        </div>
        <p className="para">
          Hi, I’m Aisha – a passionate and dedicated Level 2 Seller on Fiverr. With expertise as a Graphic Designer, UI/UX Designer, and Full Stack Developer, I combine creativity with technical skill to deliver exceptional designs and digital solutions. Currently, I’m also a student in the Generative AI and Web 3.0 course, expanding my skills to keep up with the latest advancements. I take immense pride in my work and strive to create impactful digital experiences for my clients.
        </p>
        <div className='line'></div>
        <div>
          <button className="btn">
            <Link
              className="link"
              href="/contact"
            >
              Contact Me</Link>
            <span><FaRegArrowAltCircleRight className='contactIcon' /></span>

          </button>

        </div>
      </div>
    </main>
  )
}

export default About
