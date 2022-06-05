import React from 'react';
import './Token.css';
import Slider from 'react-slick';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Token = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ display: 'flex', margin: 'auto' }}>
        <div className="bdcard">
          <AcUnitIcon className="AcUnitIcon" />
          <div>
            <p>Tk</p>
            <h5>BDT 5628</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
