import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const UserStripe = () => {
  const router = useRouter();
  return (
    <div className="flex w-full bg-darkgreen justify-between p-4 sticky top-0">
      <div className="flex">
        <Image
          src="/group.svg"
          alt="group"
          className="w-16 h-auto"
          width={50}
          height={50}
        />
      </div>
      <div className="block m-4 text-start my-auto w-full">
        <div className="text-xl font-bold">Frontend Group</div>
        <div>girish, hrushi, shubham, nayan, vaibhav, etc</div>
      </div>
      <Image
        src="/search.svg"
        alt="search"
        className="w-8 mx-4 h-auto"
        width={50}
        height={50}
      />
      <button
        type="button"
        className="bg-green text-white px-1"
        onClick={() => {
          localStorage.removeItem("userToken");
          router.push("/login");
        }}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default UserStripe;
