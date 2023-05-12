import React from "react";
import Image from "next/image";
function Card({ image }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={image} alt="Shoes" />
        </figure>
      </div>
    </>
  );
}

export default Card;
