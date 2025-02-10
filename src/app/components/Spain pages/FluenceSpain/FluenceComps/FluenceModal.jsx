import Image from "next/image";
import React from "react";
import FluenceTab from "./FluenceTab";

const FluenceModal = () => {
  return (
    <div>
      <div className=" justify-center items-start gap-5 ">
        <div className="">
          <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
            <div className="flex justify-between relative">
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                  Renault Fluence
                </h1>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5 ">
              Renault Fluence
            </h1>
            <div className="my-3">
              <Image
                width={300}
                height={290}
                src="/images/calculateur_DC4_renault-fluence.webp"
                className="mx-auto w-[300px] h-[170px] mb-4"
                alt=""
              />
            </div>
            <p className="text-justify text-[15px]">
              Verifique la disponibilidad de su módulo (caja de cambios a
              controlar) para su caja automática EDC Renault Fluence. Este puede
              ser entregado en blanco o directamente programado (Plug & Play).
              La instalación es posible dependiendo de su ubicación geográfica.
              Solo existe un modelo para Renault Fluence: Diésel. No dude en
              contactarnos si desea estar absolutamente seguro de que esta pieza
              es realmente la causa del problema. Para más información, puede
              consultar nuestra ayuda en línea.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      <div className="mt-5">
        <FluenceTab />
      </div>
    </div>
  );
};

export default FluenceModal;
