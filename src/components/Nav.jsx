import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const location = useLocation();
    return (
        <nav className="d-flex justify-content-center">
            <ul className="list-inline">
                <li className={`list-inline-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to='/'>
                        <em>About Me</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className={`list-inline-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                    <Link to='/portfolio'>
                        <em>Portfolio</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className={`list-inline-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to='/contact'>
                        <em>Contact</em>
                    </Link>
                </li>
                
                <li className="list-inline-item">|</li>
                
                <li className={`list-inline-item ${location.pathname === '/resume' ? 'active' : ''}`}>
                    <Link to='/resume'>
                        <em>Resume</em>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
