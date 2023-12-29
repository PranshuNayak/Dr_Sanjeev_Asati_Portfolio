import React from "react";
import cover from "./images/dr.jpeg";

function About() {
  return (
    <section className="bg-gray-50 w-100%" id="bio">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-600 sm:text-5xl">
              Dr Sanjeev Asati
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Dr Sanjeev Asati is a consultant Spine Surgeon who has been
              practicing at Bombay Hospital, Indore. He is trained in managing
              all conditions related to spine.
            </p>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              He is a trained Minimally invasive spine surgeon (Key Hole Spine
              Surgery) (Endoscopic Tubular Spine Surgery). He is expert in
              managing Back pain, Neck pain, Disc prolapse, Sciatica,
              Spondylolisthesis, lumbar canal stenosis, Traumatic spine
              conditions, Osteoporotic fractures, Spinal Infections (Spinal
              Tuberculosis), Spine Tumors, Spine deformities.
            </p>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              He has numerous publications in various national and international
              journals. He is associated with reknowned orgnisations such as
              Association of Spine Surgeons of India,Endoscopic Spine Foundation
              India,IOA,AOSI,ISSA,IMA.
            </p>
          </div>
          <div>
            <img src={cover} alt="dr_sanjeev_asati" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
