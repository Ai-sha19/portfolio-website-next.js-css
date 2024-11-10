import Link from 'next/link';
import Image from 'next/image';
import "../style/footer.css";
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* <img className="logo" src="../Aisha-logo.png" alt="logo" /> */}

        <Image
          src="/Aisha-logo.png"
          alt="logo"
          width={150}
          height={150}
          className="logo"
        />
        <div className="verticalLine"></div>
        <span className="text">© All rights reserved 2024</span>
      </div>
      <div className="footer-right">
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
    </footer>
  );
}
