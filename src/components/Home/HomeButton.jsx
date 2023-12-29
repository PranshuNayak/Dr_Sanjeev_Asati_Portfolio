import React from "react";
import { FaCircleChevronUp } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

function HomeButton() {
  const buttonHandler = () => {};

  return (
    <button
      onClick={buttonHandler}
      title="Contact Sale"
      className="h-20 w-20 fixed z-1000 bottom-10 left-8 bg-blue-600 rounded-full drop-shadow-lg md:flex hidden justify-center items-center text-white hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
    >
      <ScrollLink
        className="whatsapp_float"
        to="home"
        smooth={true}
        duration={500}
      >
        <FaCircleChevronUp
          className="text-4xl"
        />
      </ScrollLink>
    </button>
  );
}

export default HomeButton;
