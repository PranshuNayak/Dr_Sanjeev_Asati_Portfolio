import React from "react";
import Carousel from "./Carousel";

function Gallery() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 grid lg:grid-cols-2 lg:gap-8 ">
        <div className="max-w-xl lg:mb-0 mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-slate-600 sm:text-5xl">
          A Visual Journey Through the World of Discovery and Healing
          </h2>
        </div>

        <Carousel
          images={[
            "https://lh3.googleusercontent.com/p/AF1QipOYDJqKK41jnyJwZGjzfgPewCq6fp_mMFBm5F0y=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipMTlW146XZEIkQJKT0BqDxmpqO2ch0S0INENTHc=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipNlRrCPZrAET7mPUAn374qfxjTCRVLu5dF6u3oA=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipNwEzUmmJOSp9YuVW_ER2ZziOD4-ZxswlzrKl5C=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipOfxYiqEEoIbk3DwWXO9TJf7QaLRiVtEtkYN4_c=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipO3JPQbUMxebNJAAfWIcRB9oaN0WpMdn_RrxpBU=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipO1vpyPpROwVVd15TG8A0Dj2uLK6Wzwy23RCUEP=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipN49XAabPZX78dhbezit9YERxfkDaF_Bpn366o4=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipONZ4WUAMnHGTSiajCsMyCGxKlwHcqxakpEiSLy=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipNQ03AygUtwSBbiP2rpGOLQ8-Az5N3wYA2GnXes=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipMe0JS_VbP5O2uvCrjpm4GNiKQjzfyUW9nZ7Srj=s680-w680-h510",
            "https://lh3.googleusercontent.com/p/AF1QipOwQJoMl8girjkK2m_kcYJvfwAmIo1WgXF-9fWl=s680-w680-h510",
          ]}
        />
      </div>
    </section>
  );
}

export default Gallery;
