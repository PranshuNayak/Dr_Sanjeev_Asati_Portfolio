import React from "react";
import { FaCircleChevronUp } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

function HomeButton() {
  const buttonHandler = () => {};

  return (
    <button
      onclick="buttonHandler()"
      title="Contact Sale"
      class="fixed z-90 bottom-10 left-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
    >
      <ScrollLink
        class="whatsapp_float block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
        to="home"
        smooth={true}
        duration={500}
      >
        <FaCircleChevronUp />
      </ScrollLink>
    </button>
  );
}

export default HomeButton;
