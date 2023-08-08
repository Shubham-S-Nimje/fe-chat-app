import Image from "next/image";
import React from "react";

const MessageStripe = () => {
  return (
    <div className="flex w-ful justify-between p-2 sticky bottom-0 shadow-md">
      <div className="flex justify-between w-full px-2 bg-gray rounded-full">
        <Image
          src="/emoji.svg"
          alt="emoji"
          className="w-12 h-auto p-1"
          width={50}
          height={50}
        />
        <input
          src="/group.svg"
          placeholder="Message"
          className="w-full bg-white rounded-full px-4 m-2"
        />
        <Image
          src="/clip.svg"
          alt="clip"
          className="w-12 h-auto p-3"
          width={50}
          height={50}
        />
        <Image
          src="/camera.svg"
          alt="camera"
          className="w-12 h-auto p-3"
          width={50}
          height={50}
        />
      </div>
      <Image
        src="/mic.svg"
        alt="mic"
        className=" bg-back"
        width={50}
        height={50}
      />
    </div>
  );
};

export default MessageStripe;
