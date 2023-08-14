import BrandLogo from "@/components/loginpage/BrandLogo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserStripe = () => {
  const router = useRouter();
  return (
    <div className="bg-darkgreen p-2 sticky top-0 max-sm:hidden">
      <div className="flex items-center">
        <button
          type="button"
          className="px-1 my-2 cursor-pointer flex items-center"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/whatsapp.svg"
            alt="whatsapp"
            className="w-8 m-2 h-auto max-sm:w-6"
            width={50}
            height={50}
          />
          <p className="text-md font-semibold text-white">CHATAPP WEB</p>
        </button>
      </div>
    </div>
  );
};

export default UserStripe;
