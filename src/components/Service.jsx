import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/service3.png";


const Service = () => {
  return (
    <div className='services'>
<Carousel 

infiniteLoop
autoPlay
showStatus={false}
showArrows={false}
interval={1700}
showThumbs={false}
showIndicators={false}
>
   <div className='pic'>
    <img src={img1} alt="Item1" />
    <p className="legend">Meditation Classes..</p>
    </div> 

    <div className='pic'>
    <img src={img2} alt="Item2" />
    <p className="legend">Yoga Streching and Poses</p>
    </div> 

    <div className='pic'>
    <img src={img3} alt="Item1" />
    <p className="legend">24X7 Support & Guidence</p>
    </div>

    
</Carousel>

    </div>
  )
}

export default Service