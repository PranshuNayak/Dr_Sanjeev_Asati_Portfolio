import React from "react";
import backPain from "./images/back-pain-svgrepo-com.svg";
import neckPain from "./images/neckPain.webp";
import osteroprotic from "./images/osteroprotic.png";
import slipDisk from "./images/slip_disk.png";
import spinalInfection from "./images/spinal_infection.png";
import spineDeformity from "./images/spine_deformity.png";
import Card from "./Card";

function Services() {
  const cards = [
    {
      img: backPain,
      heading: "back pain",
      content:
        "Back pain is a prevalent discomfort originating from various factors such as muscle strain, poor posture, or underlying medical conditions. Its impact on daily life and well-being necessitates understanding and addressing contributing factors to alleviate discomfort, restore mobility, and improve overall spinal health.",
    },
    {
      img: neckPain,
      heading: "neck pain",
      content:
        "Neck pain, a prevalent discomfort, may arise from factors such as poor posture, muscle strain, or underlying medical conditions. Medical attention is focused on understanding the specific causes, assessing the impact on daily life, and implementing interventions to alleviate pain, restore mobility, and enhance overall neck health.",
    },
    {
      img: slipDisk,
      heading: "Disc Prolapse",
      content:
        "Disc prolapse involves the bulging or rupture of spinal discs, potentially causing pain and nerve compression. Management focuses on understanding symptoms, promoting healing, and mitigating complications associated with this condition.",
    },
    {
      img: spinalInfection,
      heading: "Spinal Infection (Spondylodiscitis)",
      content:
        "Spondylodiscitis, a spinal infection, results in severe pain and inflammation. The medical approach involves a thorough understanding of the infection, its causative agents, and prompt, effective treatment to address symptoms and prevent complications.",
    },
    {
      img: spineDeformity,
      heading: "Spinal Deformity (Scoliosis/Kyphosis)",
      content:
        "Scoliosis and kyphosis are spinal deformities affecting posture and mobility. Medical management revolves around understanding the degree of deformity, potential complications, and implementing interventions to improve spinal alignment and overall health.",
    },
    {
      img: osteroprotic,
      heading: "Osteoporotic fractures",
      content:
        "Osteoporotic fractures, commonly associated with weakened bones, particularly in older adults, pose a significant health risk. Medical considerations involve preventive measures, bone health assessments, and strategies to enhance bone strength, reducing the risk of fractures.",
    },
  ];
  return (
    <section className="bg-gray-50" id="services">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-slate-600 sm:text-5xl">
              Specialized Care Tailored Just for You
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Indulge in exclusive care designed just for you. Our specialized
              services prioritize your unique needs, ensuring a tailored
              approach to enhance your well-being and elevate your healthcare
              experience.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.img}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
