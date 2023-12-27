import React from "react";

function Card(props) {
  const { image, heading , content } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
     <div className="flex justify-center items-center">
     <img
        className="w-1/2"
        src={image}
        alt={heading}
      />
     </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{heading}</div>
        <p className="text-gray-700 text-base">
         {content}
        </p>
      </div>
     
    </div>
  );
}

export default Card;
