import React from "react";
import UserChats from "./userchats/UserChats";
import Image from "next/image";
import UserStripe from "./userstripe/UserStripe";
import MessageStripe from "./messagestripe/MessageStripe";

const ChatRight = () => {
  return (
    <div className="w-2/3 block text-white h-screen border-l-2 border-gray">
      <UserStripe />
      <UserChats />
      <MessageStripe />
    </div>
  );
};

export default ChatRight;
