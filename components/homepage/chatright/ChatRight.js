import React, { useEffect, useState } from "react";
import UserChats from "./userchats/UserChats";
import UserStripe from "./userstripe/UserStripe";
import MessageStripe from "./messagestripe/MessageStripe";

const ChatRight = () => {
  const [chats, Setchats] = useState();
  const [chatupdate, Setchatupdate] = useState(true);
  const userToken = localStorage.getItem("userToken");

  

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
  }, [chatupdate]);

  // setInterval(() => {
  //   Setchatupdate(!chatupdate)
  // }, 1000);

  // console.log(chatupdate)

  return (
    <div className="md:w-2/3 block text-white h-screen border-l-2 border-gray">
      <UserStripe />
      <UserChats chats={chats} />
      <MessageStripe Setchatupdate={Setchatupdate} chatupdate={chatupdate} />
    </div>
  );
};

export default ChatRight;
