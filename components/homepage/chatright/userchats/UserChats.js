import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserChats = (props) => {
  const userToken = localStorage.getItem("userToken");
  const userEmail = localStorage.getItem("userEmail");

  // console.log(props.chats,userEmail);

  return (
    <div className="h-screen overflow-auto pb-40 text-black">
      {props.chats &&
        props.chats.map((chatdata) => {
          // console.log(chatdata.email);
          if (chatdata.email === userEmail) {
            return (
              <div
                key={chatdata.id}
                className="flex max-w-full justify-end m-2 items-start"
              >
                <div className="flex bg-white rounded-2xl">
                  <div className="block p-2 text-end max-w-1/2">
                    <div className="text-darkgray font-semibold">
                      {chatdata.username}
                    </div>
                    <div>{chatdata.message}</div>
                    <div className="text-xs text-end">
                      {new Date(chatdata.createdAt).toLocaleString()}
                      <span>✔</span>
                    </div>
                  </div>
                  <Image
                    src="/user.svg"
                    alt="user"
                    className="w-12 h-auto rounded-tl-3xl bg-gray"
                    width={50}
                    height={50}
                  />
                </div>{" "}
              </div>
            );
          } else {
            return (
              <div
                key={chatdata.id}
                className="flex max-w-full justify-start items-start m-2"
              >
                <div className="flex bg-white rounded-lg">
                  <Image
                    src="/user.svg"
                    alt="user"
                    className="w-12 h-auto rounded-tr-2xl bg-gray"
                    width={50}
                    height={50}
                  />
                  <div className="block p-2 text-end max-w-1/2">
                    <div className="text-darkgray font-semibold">
                      {chatdata.username}
                    </div>
                    <div>{chatdata.message}</div>
                    <div className="text-xs text-end">
                      {new Date(chatdata.createdAt).toLocaleString()}
                      <span>✔</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default UserChats;
