import CreategrpForm from "@/components/common/CreategrpForm";
import Menubar from "@/components/common/Menubar";
import Image from "next/image";
import React, { useState } from "react";

const UserStripe = () => {
  const [groupForm, setgroupForm] = useState(false);

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
        className="w-8 h-auto x-1 my-2 block cursor-pointer text-2xl m-2"
        width={50}
        height={50}
      />
      <button
        type="button"
        className="px-1 my-2 block cursor-pointer text-2xl m-2"
        onClick={() => {
          setgroupForm(true);
        }}
      >
        <Image
          src="/creategroup.svg"
          alt="creategroup"
          className="w-10 h-auto"
          width={50}
          height={50}
        />
      </button>

      <div className="max-sm:hidden px-1 my-2 block cursor-pointer text-2xl m-2">
        <Menubar />
      </div>
      {groupForm && (
        <div className="absolute text-end bg-darkgreen p-2 rounded-lg border-2 border-white">
          
          <button
            type="button"
            className="px-2 py-1 mb-2 text-2xl bg-red-600 text-white rounded-lg"
            onClick={() => {
              setgroupForm(false);
            }}
          >
            Close
          </button><CreategrpForm setgroupForm={setgroupForm}/>
        </div>
      )}
    </div>
  );
};

export default UserStripe;
