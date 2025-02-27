import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
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

    // Logout Handler
    // const handleLogout = () => {
    //     localStorage.removeItem('user');
    //     setIsLoggedIn(false);
    //     setRole('');
    //     navigate('/');
    // };

    return (
        <nav>
            <div className="nav-left">
                <h1>
                    <Link to={isLoggedIn && role === 'Admin' ? '/dashboard' : '/'}>
                        {isLoggedIn && role === 'Admin' ? 'Admin' : 'Home'}
                    </Link>
                </h1>
            </div>

            <ul className="nav-right">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/mission">Our Mission</Link></li>
                {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                <li><Link to="/contact">Contact Us</Link></li>

                {/* {isLoggedIn && (
                    <li>
                        <button 
                            className="logout-btn" 
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </li>
                )} */}
            </ul>
        </nav>
    );
}

export default Navbar;
