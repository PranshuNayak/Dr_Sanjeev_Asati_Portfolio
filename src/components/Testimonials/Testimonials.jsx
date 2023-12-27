import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mohammed zahid Hussain",
      review: `Thanks to Dr Sanjeev Asati sir
      He was very  co operative and very supportive all through the treatment .
      He is the best spine surgeon in Bombay Hospital indore.
      Dr Asati performed surgery with full expertise
      `,
    },
    {
      id: 2,
      name: "Vishwajeet Panwar",
      review: `I met sanjiv sir regarding the treatment of my grandmother age 78 years as she has fractures in her lower spinal cord and has severe pain. Sir refused surgery becoz of age instead treated her through medicines and she has immense relief within 5 months of treatment and she is back to her normal regular routine. We really thankful to you sir.
        `,
    },
    {
      id: 3,
      name: "Abdul Hamid Khan",
      review: `My experience is really great. My age is 68 and i was suffered with severe pain in back and right leg due to disc bulge. I was not able to walk properly. I tried physiotherapy for almost one month without any benefit. After consulting with Dr. Asati, I agreed for Surgery and from next day of surgery, thier is no pain in my leg and able to walk. Today after one month I m in state of normal life without pain. 😊

      I m thankful to Dr Sanjeev Asati for this. 🙏`,
    },
  ];
  return (
    <section className="bg-gray-50" id="testimonials">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-slate-600 sm:text-5xl">
              Discover the Stories of Healing from Our Valued Patients
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Uncover stories of resilience and healing. Our patients share
              transformative experiences, reflecting compassionate care and
              life-changing support at every step of their journey.
            </p>
          </div>

          <a
            href="https://www.google.com/search?q=sanjiv+asati&oq=sanjiv+&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5Mg0IAhAuGIMBGLEDGIAEMg0IAxAuGIMBGLEDGIAEMg8IBBAuGBQYhwIYsQMYgAQyBwgFEAAYgAQyCggGEC4YsQMYgAQyCggHEC4Y1AIYgAQyCggIEC4Y1AIYgAQyDQgJEC4YgwEYsQMYgATSAQgxNDIzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x39631d3bc552e63f:0x3df1f2a83cc87a2f,1,,,,"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
            target="_blank"
         >
            <span className="font-medium"> Read all reviews </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
