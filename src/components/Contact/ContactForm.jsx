import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const ContactForm = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.info("Sending message . Please wait")
    emailjs
      .sendForm(
        "service_0e6ql6h",
        "spinesurgeonindore_cntct",
        form.current,
        "x8AA8lFnwjsVQ1L_-"
      )
      .then((result) => {
        toast.dismiss()
        toast.success("Message sent successfully !")
        console.log(result.text);
      })
      .catch((error) => {
        toast.dismiss()
        toast.error("Error sending the message . Please try again")
        console.log(error);
      });
     
  };

  return (
    <div className="w-full p-5 rounded-2xl shadow-2xl">
      <div className="flex">
        <h1 className="font-bold uppercase text-5xl">
          Send us a <br /> message
        </h1>
      </div>
      <form id="form" ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name*"
            name="first_name"
            id="first_name"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
            name="last_name"
            id="last_name"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
            name="email"
            id="email"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="tel"
            placeholder="Phone*"
            name="phone"
            id="phone"
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className="my-2">
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
          >
            Submit
            <ToastContainer />
          </button>
        </div>
      </form>
    </div>
  );
};