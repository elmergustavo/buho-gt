import Image from "next/image";
import React from "react";

const ShopCard = () => {
  return (
    // <div className="w-full h-10 bg-[#FAF0F0]">
    //   <div className="flex justify-between">
    //     <div>
    //       <p>Encuentra las tiendas Buhogt</p>
    //     </div>

    //     <div>
    //       <Image
    //         src="/assets/images/banner_item1.png"
    //         width={200}
    //         height={200}
    //         alt="Picture of the author"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-md mx-auto bg-[#FAF0F0] rounded-sm overflow-hidden ">
      <div className="md:flex justify-center items-center px-8 py-14 gap-2\ ">
        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <div className=" tracking-wide text-lg font-bold">
              Encuentra las tiendas Buhogt
            </div>
            <p className=" text-gray-500 text-sm">Obtén la mejor tecnología</p>
          </div>

          {/* <div className="mt-4">
          <button className="bg-indigo-500 text-white py-2 px-4 rounded">
            Buy Now
          </button>
        </div> */}
        </div>

        <div className="md:flex-shrink-0">
          <img
            className="h-32 w-full object-cover md:w-48"
            src="/assets/images/banner_item1.png"
            alt="Sales Product"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
