import './About.css';
import p1 from '../Assets/food_waste.png';
const About = () => {
    return ( 
        <div className='about'>
            <img src={p1} alt="p1" />
            <div className='about-content'>
                <h1>About Us</h1>
                <hr />
                <li>This App is created to help the poor needy people</li>
                <li>In India nearly thousands people sleep without food who are really unfortunate to get food and cuse disease like Starvation, Malnutrition etc</li>
                <li>So the our main aim is to stop hunger and provide them with food</li>
            </div>
            
        </div>
     );
}
 
export default About;