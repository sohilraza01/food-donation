import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useState } from 'react';
const Sidebar = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [role,setRole] = useState('');
    const navigate = useNavigate();
      // Logout Handler
    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setRole('');
        navigate('/');
    };
    return ( 
        <div className='sidebar'>
            <div className="sidebar-container">
                
                <Link className='sidebar-links' to='/dashboard'><p>Dashboard</p></Link>
                <Link className='sidebar-links' to='/pending'><p>Pending Donation</p></Link>
                <Link className='sidebar-links' to='/previous'><p>Previous Donation</p></Link>
                
                <span className='sidebar-logout' onClick={handleLogout}>Logout</span>
            </div>
        </div>
     );
}
 
export default Sidebar;