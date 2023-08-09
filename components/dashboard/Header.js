import Image from "next/image";
import React from "react";
import Menubar from "../common/Menubar";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between p-2 bg-darkgreen">
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
          <p className="text-md font-semibold text-white">
            CHATAPP WEB
          </p>
        </button>
      </div>
      <div className="flex">
        <button
          type="button"
          className="px-1 my-2 block cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/group.svg"
            alt="group"
            className="w-8 mx-4 h-auto max-sm:w-6"
            width={50}
            height={50}
          />
        </button>
        <button
          type="button"
          className="px-1 my-2 block cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/message.svg"
            alt="message"
            className="w-8 mx-4 h-auto max-sm:w-6"
            width={50}
            height={50}
          />
        </button>
        <Menubar />
      </div>
    </div>
  );
};

export default Header;
