import React from 'react';
import vg from "../assets/h8.jpg";
import vg1 from "../assets/h6.jpg";
import vg2 from "../assets/h5.jpg";
import { AiOutlineBook, AiFillCustomerService, AiFillYoutube, AiOutlineSkin } from "react-icons/ai"



import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/hpme5.png";
import img2 from "../assets/home9.png";
import img3 from "../assets/home8.png";





const Home = () => {
  return (
    <>


      <div className='home'>
        <Carousel

          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          interval={2000}
          showThumbs={false}
          showIndicators={false}
        >
          <div className='pic'>
            <img src={img1} alt="Item1" />
          </div>

          <div className='pic'>
            <img src={img2} alt="Item2" />
          </div>

          <div className='pic'>
            <img src={img3} alt="Item1" />
          </div>

        </Carousel>
        <main>
          <h1>Mind&Body</h1>
          <p>Have A Balance Of Perfect Body And Calm Soul.</p>
        </main>

      </div>


      <div className="home2" >
        <div>
          <img src={vg} alt="Graphics" />
          <div>
            <p>Calm Your Mind..</p>

          </div></div>

        <div>
          <img src={vg1} alt="Graphics" />
          <div>
            <p> Keep Yourself In Shape..</p>

          </div></div>

        <div>
          <img src={vg2} alt="Graphics" />
          <div>
            <p> Make Yourself A Happy Soul..</p>

          </div></div>




      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are??</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vel corrupti odit modi illo non. Maxime magnam, minima laudantium nulla, provident earum distinctio quis doloribus saepe sequi inventore fuga quaerat vel. Id.</p>
        </div>
      </div>
      <div className="home4" id='products'>
        <div>
          <h1>Products</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>

              <AiFillCustomerService />
              <p>YMusic</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiOutlineBook />
              <p>YogaBook</p>
            </div>

            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillYoutube />
              <p>YVideo</p>
            </div>

            <div style={{
              animationDelay: "0.1s",
            }}>
              <AiOutlineSkin />
              <p>Apparels</p>
            </div>
          </article>
        </div>
      </div>

    </>
  )
}

export default Home