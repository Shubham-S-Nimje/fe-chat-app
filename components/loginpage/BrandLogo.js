import Image from "next/image";
import React from "react";

const BrandLogo = () => {
  return (
    <div className="flex mb-8 m-4 justify-start items-center">
      <Image
        src="/whatsapp.svg"
        alt="Logo"
        className="w-10 h-auto md:w-8"
        width={50}
        height={50}
      />
      <p className="text-md md:text-sm text-white flex m-2 min-w-fit">CHATAPP WEB</p>
    </div>
  );
};

export default BrandLogo;
