import Image from "next/image";
import React from "react";

function SearchUsers() {
  return (
    <div className="flex w-full bg-white justify-between p-2 sticky top-20 shadow-md">
      <div className="flex justify-between w-full">
        <input
          src="/group.svg"
          placeholder="Search or start new chat"
          className="w-full bg-gray rounded-full px-4"
        />
        <Image
          src="/menu.svg"
          alt="menu"
          className="w-8 h-auto m-2"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}

export default SearchUsers;
