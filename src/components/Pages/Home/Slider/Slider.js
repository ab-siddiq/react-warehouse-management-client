import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid "
            src="https://i.ibb.co/WfGPYpK/H0a53022ac9b34d55b8b4725fa561e5b6h.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-black">Push portable transformer</h3>
            <p className="text-black">
              Push portable transformer oil dielectric strength bdv tester oil
              test equipment
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/d6xvs2S/H995ae1903ede4449ad497935f2e3ffde9.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-black">
              High Low Temperature and Humidity Test
            </h3>
            <p className="text-black">
              High Low Temperature and Humidity Test Chamber High-low
              Temperature Test Equipment Chamber
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/0GtZMJR/Hf86a2b20dafa48609f8900c6321d71f2c.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-black">Optical Measuring Equipment</h3>
            <p className="text-black">
              Optical Measuring Equipment SMART Series S2015 Lab Optical Video
              Dimensional Measure Equip Test System With High Efficiency
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
