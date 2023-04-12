import React, { useState } from "react";

export default function Topo(props) {
  return (
    <header className="flex flex-col gap-5 items-center border-y-2 p-10 w-full">
      <h1 className="text-3xl font-semibold">Projeto Props + useState</h1>
      <p>Clique no botão para mudar os componentes abaixo</p>
      <button
        onClick={props.alteraAnimal}
        className="bg-white border-2 border-black rounded-3xl w-36
       py-2 font-semibold text-lg"
      >
        Mudar animal
      </button>
    </header>
  );
}
