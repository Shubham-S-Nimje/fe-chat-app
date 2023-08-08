import Image from "next/image";
import React from "react";

const BrandLogo = () => {
  return (
    <div className="flex mb-8 m-4">
      <Image
        src="/whatsapp.svg"
        alt="Logo"
        className="w-10 h-auto"
        width={50}
        height={50}
      />
      <h2 className="text-md text-white flex m-2">CHATAPP WEB</h2>
    </div>
  );
};

export default BrandLogo;
