import Image from "next/image";
import React from "react";
import UserStripe from "./userstripe/UserStripe";
import SearchUsers from "./searchusers/SearchUsers";
import UsersList from "./userslist/UsersList"

const ChatLeft = () => {
  return (
    <div className="w-1/3 block bg-white">
      <UserStripe />
      <SearchUsers />
      <UsersList />
    </div>
  );
};

export default ChatLeft;
