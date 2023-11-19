import React from "react";

const Information = () => {
  return (
    <div className="border-[16px] border-[#84CDE4] border-opacity-25">
      <div className="bg-white px-8 py-10 flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl">Buho Vendedores</h1>

        <p className="max-w-xl text-center">
          Buho es un marketplace que ha estado potenciando a los pequeños
          negocios ¿Quieres vender en Buhogt? Abre un puesto y y empieza a
          vender.
        </p>

        <div className="flex gap-3 text-sm font-semibold mt-6">
          <button className="px-4 py-2 text-white bg-[#272B60]">Comenzar a vender</button>
          <button className="px-4 py-2 border-2 border-black">Requisitos para vender</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
