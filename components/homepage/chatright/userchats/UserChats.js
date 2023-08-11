import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const [chats, Setchats] = useState();
  const userToken = localStorage.getItem("userToken");
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/chat/fetch-chats`);
        const data = await response.json();

        // console.log(data);
        Setchats(data.data.chats);
      } catch {
        alert("error");
      }
    }
    {
      userToken && fetchData();
    }
  }, []);

  return (
    <div className="h-screen overflow-auto pb-40 text-black">
      {chats &&
        chats.map((chatdata) => {
          // console.log(chatdata);
          // if (chatdata.id % 2 === 0) {
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
          // }
          // if (chatdata.id % 2 != 0) {
          //   return (
          //     <div
          //       key={chatdata.id}
          //       className="flex max-w-full justify-end m-2 items-start"
          //     >
          //       <div className="flex bg-white rounded-2xl">
          //         <div className="block p-2 text-end max-w-1/2">
          //           <div className="text-darkgray font-semibold">
          //             {chatdata.title}
          //           </div>
          //           <div>{chatdata.message}</div>
          //           <div className="text-xs text-end">
          //             12:19 AM<span>✔</span>
          //           </div>
          //         </div>
          //         <Image
          //           src="/user.svg"
          //           alt="user"
          //           className="w-12 h-auto rounded-tl-3xl bg-gray"
          //           width={50}
          //           height={50}
          //         />
          //       </div>{" "}
          //     </div>
          //   );
          // }
        })}
    </div>
  );
};

export default UserChats;
