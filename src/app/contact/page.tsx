import React from 'react';
import "../../style/contact.css";

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="contact-container">
            {/* Left side with text and icons */}
            <div className="contact-left">
                <h2 className="contact-heading">Get in touch</h2>
                <p className="contact-subtext">
                    Drop me a line, give me a call, or send me a message by
                    submitting the form.
                </p>

                <div className="contact-info">
                    <FaEnvelope className="contact-info-icon" />
                    <span>aisha123@gmail.com</span>
                </div>
                <div className="contact-info">
                    <FaPhoneAlt className="contact-info-icon" />
                    <span>+92 333 1234567</span>
                </div>
                <div className="social-icons">
                    <Link href="https://www.linkedin.com/in/aisha-486a4b228/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </Link>
                    <Link href="https://github.com/Ai-sha19" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </Link>
                    <Link href="https://www.behance.net/aisha17" target="_blank" rel="noopener noreferrer">
                        <FaBehance className="icon" />
                    </Link>
                    <Link href="https://www.fiverr.com/aisha_graphix?up_rollout=true" target="_blank" rel="noopener noreferrer">
                        <SiFiverr className="fiverr-icon" />
                    </Link>
                </div>
            </div>

            {/* Right side form */}
            <div className="contact-form">
                <div className="form-group">
                    <input type="text" placeholder="Name" className="contact-input" />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" className="contact-input" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Message" className="contact-textarea"></textarea>
                </div>
                <button className="send-btn">Send</button>
            </div>
        </div>
    );
}
