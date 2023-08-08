import Image from "next/image";
import React from "react";

const UserStripe = () => {
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
      <Image
        src="/menudots.svg"
        alt="menudots"
        className="w-8 mx-4 h-auto"
        width={50}
        height={50}
      />
    </div>
  );
};

export default UserStripe;
