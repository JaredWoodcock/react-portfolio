import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.css';

export default function Nav() {
    const location = useLocation();
    return (
        <nav className="d-flex justify-content-center">
            <ul className={`list-inline ${styles.navList}`}>
                <li className={`list-inline-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to='/' className="text-decoration-none">
                        <em>About Me</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className={`list-inline-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                    <Link to='/portfolio' className="text-decoration-none">
                        <em>Portfolio</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className={`list-inline-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to='/contact' className="text-decoration-none">
                        <em>Contact</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className={`list-inline-item ${location.pathname === '/resume' ? 'active' : ''}`}>
                    <Link to='/resume' className="text-decoration-none">
                        <em>Resume</em>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}