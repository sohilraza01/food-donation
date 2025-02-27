import './Mission.css';
import p1 from '../Assets/mission/mission_pic1.png';
import p2 from '../Assets/mission/mission_pic2.jpg';
import p3 from '../Assets/mission/mission_pic3.webp';
import p4 from '../Assets/pic-2.jpg';
import { useState, useEffect } from 'react';
const Mission = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [p1,p2,p3, p4];
  
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
   
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); 
  
      return () => clearInterval(interval); 
    }, [currentIndex]);
  
    return ( 
        <div className='mission-container'>
        <div className='mission'>
             <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}  className='images'/>
      <a className="prev" onClick={prevSlide}>
      </a>
      <a className="next" onClick={nextSlide}>
      </a>
        </div>
        <div className="mission-content">
            <h1>Our Mission</h1>
            <hr />
            <li>To Provide unconditional help to poor and needy in the societyand To provide free food to poor and homeless, needy</li>
            <li>To feed hungry and poor on streets, distribute homes, orphanages,old age home and where there are hungry stomachs</li>
            </div> 
           
        </div>
     );
}
 
export default Mission;