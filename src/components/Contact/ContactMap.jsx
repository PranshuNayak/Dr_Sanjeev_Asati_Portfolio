import React from "react";
import Map from "./Map";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

function ContactMap() {
  return (
    <div className="w-full px-5 py-2 ml-auto bg-blue-900 rounded-2xl">
      <div className="flex flex-col text-white">
        <h1 className="font-bold uppercase text-4xl my-4">
          Drop in our office
        </h1>
        <Map />

        <div className="flex my-4">
          <div className="flex flex-col">
            <i className="fas fa-phone-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Connect with us</h2>

            <p className="text-gray-400 capitalize">
              Room No.2 , 1st floor <br />
              bombay hospital <br />
              vijaynagar, indore (452010) <br />
              Tel: +91 6352-932-225
            </p>
            <div className="mt-2">
              <ul class="mr-auto flex flex-row">
                <li>
                  <a
                    href="https://www.facebook.com/sanjeevasatispine/"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
                  >
                    <FaFacebook size={40} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dr-sanjeev-asati-94b05b15b?originalSubdomain=in"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/spinesurgeon_asati/?next=%2Foptiplazaoficial%2Ffeed%2F"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
                  >
                    <FaInstagram size={40} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/asati_sanjeev"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
                  >
                    <FaXTwitter size={40} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;
