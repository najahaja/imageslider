import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import najah1 from './assets/najah1.jpg';
import najah2 from './assets/najah2.jpg';
import najah3 from './assets/najah3.jpg';
import najah4 from './assets/najah4.jpg';
import najah5 from './assets/najah5.jpg';
import najah6 from './assets/najah6.jpg';
import najah7 from './assets/najah7.jpg';
import najah8 from './assets/najah8.jpg';
import najah9 from './assets/najah9.jpg';
import najah10 from './assets/najah10.jpg';

const images = [
  najah1, najah2, najah3, najah4, najah5, najah6, najah7, najah8, najah9, najah10
];

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="img">
            <img src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
