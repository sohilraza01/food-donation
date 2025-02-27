import './Footer.css';
import foodLogo from '../Assets/food_waste.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import instagram_icon from '../Assets/instagram_icon.png';
import printerest_icon from '../Assets/pinterest_icon.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        <footer>
        <div class="footer-container">
          <div class="footer-logo">
            <img src={foodLogo} alt={foodLogo} class="food-logo" />
            <p class="mission-statement">
              Join us in the fight to reduce food waste and create a sustainable future for all.
            </p>
          </div>
          
          <ul class="footer-links">
            <li><Link to="/mission">Our Mission</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <img src={whatsapp_icon} alt="whatsapp" className='footer_icons' />
                <img src={instagram_icon} alt="whatsapp" className='footer_icons' />
                <img src={printerest_icon} alt="whatsapp" className='footer_icons' />
          </ul>
          
            
      
          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: mitmoradabad@gmail.com</p>
            <p>Phone: +91 7500559279</p>
          </div>
        </div>
      
        <div class="footer-bottom">
          <p>&copy; MIT Final Year Students  2025 </p>
        </div>
      </footer>
      
     );
}
 
export default Footer;