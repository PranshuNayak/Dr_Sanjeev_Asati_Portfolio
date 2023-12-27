import React from "react";
import { ContactForm } from "./ContactForm";
import ContactMap from "./ContactMap";
function Contact() {
  return (
    <section className="bg-gray-50" id="contact">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-slate-600 sm:text-5xl">
              Get in touch
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              We're here for you around the clock, 24/7. Reach out anytime by
              completing the provided contact form. Your needs are our priority,
              and we're ready to assist."
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}

export default Contact;
