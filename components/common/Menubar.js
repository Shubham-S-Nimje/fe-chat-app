import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Menubar = () => {
  const router = useRouter();
  const [menuclick, setmenuclick] = useState(false);

  return (
    <div className="block px-1 my-2">
      <button
        type="button"
        className="px-1 my-2 block cursor-pointer"
        onClick={() => {
          setmenuclick(!menuclick);
          // console.log(menuclick);
        }}
      >
        <Image
          src="/menudots.svg"
          alt="menudots"
          className="w-8 mx-4 h-full max-sm:w-6"
          width={50}
          height={50}
        />
      </button>

      <div
        className={` ${
          menuclick ? "block" : "hidden"
        } absolute rounded-lg my-4 w-fit h-fit p-4 right-0 font-semibold bg-white text-darkgray`}
      >
        <div className="flex">
          <Image
            src="/user.svg"
            alt="user"
            className=""
            width={50}
            height={50}
          />
          <div className="block m-2">
            <div className="font-semibold">Username</div>
            <div className="text-xs">username@gmail.com</div>
          </div>
        </div>
        <hr />
        <button
          type="button"
          className="px-1 my-2 block"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          type="button"
          className="px-1 my-2 block"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Settings
        </button>
        <button
          type="button"
          className="px-2 block bg-green text-white rounded-lg mt-2"
          onClick={() => {
            localStorage.removeItem("userToken");
            localStorage.removeItem("userEmail");
            router.push("/login");
          }}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Menubar;
