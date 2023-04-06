import React, { useState } from "react";
import Image from "./Image";
import SlickSlider from "./Slider";

const Switcher = (props) => {
  const [show, setShow] = useState(false);

  const hoverHandler = (event) => {
    setShow(true);
  };

  const hoverOutHandler = (event) => {
    setShow(false);
  };
  return (
    <div
      className="border border-[#000] w-1/3"
      onMouseEnter={(elem) => hoverHandler(elem)}
      onMouseLeave={(elem) => hoverOutHandler(elem)}
    >
      <div className="image">
        {!show ? <Image src="image1.jpg" /> : <SlickSlider show={show} />}
      </div>
      <div>
        <h3 className="text-2xl font-bold pb-3">Product 1</h3>
        <p className="text-base">
          Eiusmod dolore sint aliquip excepteur minim pariatur ipsum sunt sunt
          dolore nostrud.
        </p>
      </div>
    </div>
  );
};

export default Switcher;
