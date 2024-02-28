import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="d-flex justify-content-center">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link to='/' className="text-decoration-none">
                        <em>About Me</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className="list-inline-item">
                    <Link to='/portfolio' className="text-decoration-none">
                        <em>Portfolio</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className="list-inline-item">
                    <Link to='/contact' className="text-decoration-none">
                        <em>Contact</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className="list-inline-item">
                    <Link to='/resume' className="text-decoration-none">
                        <em>Resume</em>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}