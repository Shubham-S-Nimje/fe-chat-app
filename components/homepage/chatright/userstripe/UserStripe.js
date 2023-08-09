import Menubar from "@/components/common/Menubar";
import Image from "next/image";
import React from "react";

const UserStripe = () => {
  return (
    <div className="flex w-full bg-darkgreen justify-between p-4 md:sticky top-0 max-sm:text-sm ">
      <div className="flex">
        <Image
          src="/group.svg"
          alt="group"
          className="w-16 h-auto"
          width={50}
          height={50}
        />
      </div>
      <div className="block m-4 text-start my-auto w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
        <div className="text-xl max-sm:text-sm font-bold">Frontend Group</div>
        <div className="">girish, hrushi, shubham, nayan, vaibhav, etc</div>
      </div>
      <Image
        src="/search.svg"
        alt="search"
        className="w-8 max-sm:w-6 mx-4 h-auto"
        width={50}
        height={50}
      />
      <div className="max-sm:hidden">
        <Menubar />
      </div>
    </div>
  );
};

export default UserStripe;
