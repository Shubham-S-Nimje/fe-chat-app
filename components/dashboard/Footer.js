import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-darkgreen text-white bottom-0 inset-x-0 w-full text-center p-2">
      <div className="justify-center items-center flex">
        <Image
          src="/whatsapp.svg"
          alt="whatsapp"
          className="w-8 m-2 h-auto max-sm:w-6"
          width={50}
          height={50}
        />
        <span className="text-2xl font-semibold">CHATAPP WEB</span>
      </div>
      <hr className="my-3 sm:mx-auto lg:my-2" />
      <span className="text-sm sm:text-center">
        © 2023{" "}
        <a href="#" className="hover:underline">
          CHATAPP WEB™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
