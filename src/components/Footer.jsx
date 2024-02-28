import React from "react";
import { FaGitHub, FaLinkedIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/JaredWoodcock" target="_blank" rel="noopener noreferrer">
                    <FaGitHub size={30} />
                </a>
                <a href="www.linkedin.com/in/jared-woodcock-237549210" target="_blank" rel="noopener noreferrer">
                    <FaLinkedIn size={30} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;