import React, { useEffect, useState } from "react";
import UserChats from "./userchats/UserChats";
import UserStripe from "./userstripe/UserStripe";
import MessageStripe from "./messagestripe/MessageStripe";
import { useSelector } from "react-redux";

const ChatRight = () => {
  const userToken = localStorage.getItem("userToken");
  const lastchats = localStorage.getItem("chats") || "[]";
  const parsedLastChats = JSON.parse(lastchats);
  const lastChatId =
    parsedLastChats.length > 0
      ? parsedLastChats[parsedLastChats.length - 1].id
      : 0;
  const [chats, Setchats] = useState(JSON.parse(lastchats));
  const [chatupdate, Setchatupdate] = useState(true);
  const [lastchatid, Setlastchatid] = useState(lastChatId);

  const activegroup = useSelector((state) => state.activegroup.activegroup);

  // console.log("activegroup", activegroup);

  // console.log(lastchatid);
  useEffect(() => {
    const obj = {
      groupId: activegroup,
      lastchatid: lastchatid,
    };
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:4000/chat/fetch-chats/resource?id=${activegroup}&id=${lastchatid}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: userToken,
            },
          }
        );
        const data = await response.json();
        // console.log(data);
        if (data.data) {
          // console.log((data.data.chats).length);
          // Setlastchatid(data.data.chats.length);
          Setchats(data.data.chats);
          // Setlastchats(data.data.chats);
          localStorage.setItem("chats", JSON.stringify(data.data.chats));
        } else {
          console.log(data.message);
        }
      } catch (err){
        console.log(err)
        alert("error");
      }
    }
    if (userToken) {
      fetchData();
    }
  }, [chatupdate, activegroup]);

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
