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

const UsersList = () => {
  return (
    <div className="h-screen overflow-auto py-20">
      {obj.map((chatdata) => {
        // console.log(chatdata);
        return (
          <div
            key={chatdata.id}
            className="flex max-w-full bg-white justify-between p-1"
          >
            <Image
              src="/user.svg"
              alt="user"
              className="w-16 h-auto"
              width={50}
              height={50}
            />
            <div className="block m-2 text-start my-auto w-full">
              <div className="text-xl font-semibold">{chatdata.title}</div>
              <div>{chatdata.message}</div>
            </div>
            <div className="block m-2 text-center w-1/3">
              <div>12:19 AM</div>
              <div>✔</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
