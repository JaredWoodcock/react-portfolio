import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="py-4">
            <div className="text-center">
                <a className="list-inline-item" href="https://github.com/JaredWoodcock" target="_blank" rel="noopener noreferrer">
                    GitHub <FontAwesomeIcon icon={faGithub} />
                </a>
                <div className="list-inline-item">|</div>

                <a className="list-inline-item" href="https://www.linkedin.com/in/jared-woodcock/" target="_blank" rel="noopener noreferrer">
                    LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                </a>
                
                <div className="list-inline-item">|</div>

                <a className="list-inline-item" href="https://stackoverflow.com/users/23524666/jaredw" target="_blank" rel="noopener noreferrer">
                    Stack Overflow <FontAwesomeIcon icon={faStackOverflow} />
                </a>
            </div>
        </footer>
    );
}