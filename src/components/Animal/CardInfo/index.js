import React from "react";

export default function CardInfo(props) {
  return (
    <div className="border-2 border-black rounded-lg p-2">
      <h3 className="font-semibold text-2xl">
        Informação sobre o {props.tipoAn}
      </h3>
      <p>{props.infoAn}</p>
    </div>
  );
}
