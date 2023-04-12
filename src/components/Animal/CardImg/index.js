import React from "react";

export default function CardImg(props) {
  return (
    <div className="p-10">
      <img
        src={props.imgAnimal}
        alt="animal"
        className="cover w-96 h-96 cover border-black border-2 rounded-lg"
      />
    </div>
  );
}
