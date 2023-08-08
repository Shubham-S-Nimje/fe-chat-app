import Image from "next/image";
import React from "react";

const obj = [
  {
    id: 1,
    title: "group1",
    message: "this is message",
  },
  {
    id: 2,
    title: "group2",
    message: "this is message",
  },
  {
    id: 3,
    title: "group3",
    message: "this is message",
  },
  {
    id: 4,
    title: "group4",
    message: "this is message",
  },
  {
    id: 5,
    title: "group5",
    message: "this is message",
  },
  {
    id: 6,
    title: "group6",
    message: "this is message",
  },
  {
    id: 7,
    title: "group7",
    message: "this is message",
  },
  {
    id: 8,
    title: "group8",
    message: "this is message",
  },
  {
    id: 9,
    title: "group9",
    message: "this is message",
  },
  {
    id: 10,
    title: "group10",
    message: "this is message",
  },
];

const UserChats = () => {
  return (
    <div className="h-screen overflow-auto pb-40 text-black">
      {obj.map((chatdata) => {
        // console.log(chatdata);
        if (chatdata.id % 2 === 0) {
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
                  <div className="text-darkgray">{chatdata.title}</div>
                  <div>{chatdata.message}</div>
                  <div className="text-xs text-end">
                    12:19 AM<span>✔</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (chatdata.id % 2 != 0) {
          return (
            <div
              key={chatdata.id}
              className="flex max-w-full justify-end m-2 items-start"
            >
              <div className="flex bg-white rounded-2xl">
                <div className="block p-2 text-end max-w-1/2">
                  <div className="text-darkgray">{chatdata.title}</div>
                  <div>{chatdata.message}</div>
                  <div className="text-xs text-end">
                    12:19 AM<span>✔</span>
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
        }
      })}
    </div>
  );
};

export default UserChats;
