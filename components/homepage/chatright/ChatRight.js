import React, { useEffect, useState } from "react";
import UserChats from "./userchats/UserChats";
import UserStripe from "./userstripe/UserStripe";
import MessageStripe from "./messagestripe/MessageStripe";

const ChatRight = () => {
  const userToken = localStorage.getItem("userToken");
  const lastchats = localStorage.getItem("chats") || "[]";
  const [chats, Setchats] = useState(JSON.parse(lastchats));
  const [chatupdate, Setchatupdate] = useState(true);
  const [lastchatid, Setlastchatid] = useState(
    JSON.parse(lastchats)[JSON.parse(lastchats).length - 1].id || 0
  );

  console.log(lastchatid);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:4000/chat/fetch-chats/${lastchatid}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: userToken,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.data) {
          // console.log((data.data.chats).length);
          // Setlastchatid(data.data.chats.length);
          Setchats(data.data.chats);
          // Setlastchats(data.data.chats);
          localStorage.setItem("chats", JSON.stringify(data.data.chats));
        } else {
          console.log(data.message);
        }
      } catch {
        alert("error");
      }
    }
    if (userToken) {
      fetchData();
    }
  }, [chatupdate]);

  // setInterval(() => {
  //   Setchatupdate(!chatupdate)
  // }, 1000);

  // console.log(chatupdate)

  return (
    <div className="md:w-2/3 block text-white h-screen border-l-2 border-gray">
      <UserStripe />
      <UserChats
        chats={chats}
        Setlastchatid={Setlastchatid}
        lastchatid={lastchatid}
        Setchatupdate={Setchatupdate}
        chatupdate={chatupdate}
      />
      <MessageStripe Setchatupdate={Setchatupdate} chatupdate={chatupdate} />
    </div>
  );
};

export default ChatRight;
