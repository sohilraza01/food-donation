import './Home.css';
import p1 from '../Assets/Pic-1.jpg';
import p2 from '../Assets/pic-2.jpg';
import p3 from '../Assets/pic-3.jpg';
import p4 from '../Assets/pic-5.jpg';
import p5 from '../Assets/pic-6.jpeg';
import { useState, useEffect } from 'react';
import Content from './Content';


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [p1, p2, p3, p4,p5];


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
    <div>
    <div className="image-gallery">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}  className='images'/>
      <a className="prev" onClick={prevSlide}>
      </a>
      <a className="next" onClick={nextSlide}>
      </a>
    </div>
      <Content/>
    </div>
  );
};

export default Home;
