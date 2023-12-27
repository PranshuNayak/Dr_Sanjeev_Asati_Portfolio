import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  const buttonHandler = () => {};

  return (
    <button
      onclick="buttonHandler()"
      title="Contact Sale"
      class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
    >
      <a
        href="https:/wa.me/916352932225"
        target="_blank"
        class="whatsapp_float"
      >
        <FaWhatsapp />
      </a>
    </button>
  );
}

export default Whatsapp;
