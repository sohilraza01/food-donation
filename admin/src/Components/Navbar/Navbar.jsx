import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const [menuOpen, setMenuOpen] = useState(false); // ✅ State for menu toggle
    const location = useLocation();  
    const navigate = useNavigate();

    // Check login status on route change
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role) {
            setIsLoggedIn(true);
            setRole(user.role);
        } else {
            setIsLoggedIn(false);
            setRole('');
        }
    }, [location]);

    return (
        <nav>
            <div className="nav-left">
                <h1>
                    <Link to={isLoggedIn && role === 'Admin' ? '/dashboard' : '/'}>
                        {isLoggedIn && role === 'Admin' ? 'Admin' : 'Home'}
                    </Link>
                </h1>
            </div>

            {/* ✅ Hamburger Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}  {/* Show 'X' when open */}
            </div>

            {/* ✅ Navigation Links */}
            <ul className={`nav-right ${menuOpen ? "active" : ""}`}>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/mission" onClick={() => setMenuOpen(false)}>Our Mission</Link></li>
                {!isLoggedIn && <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>}
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
