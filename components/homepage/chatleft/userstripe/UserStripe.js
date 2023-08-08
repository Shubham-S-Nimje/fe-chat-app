import Image from "next/image";
import React from "react";

const UserStripe = () => {
  return (
    <div className="flex w-full bg-darkgreen justify-between p-4 sticky top-0">
      <div className="flex">
        <Image
          src="/whatsapp.svg"
          alt="whatsapp"
          className="w-8 m-2 h-auto"
          width={50}
          height={50}
        />
      </div>
      <div className="flex">
        <Image
          src="/group.svg"
          alt="group"
          className="w-8 mx-4 h-auto"
          width={50}
          height={50}
        />
        <Image
          src="/message.svg"
          alt="message"
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
    </div>
  );
};

export default UserStripe;
