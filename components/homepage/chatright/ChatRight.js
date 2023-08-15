import React, { useEffect, useState } from "react";
import UserChats from "./userchats/UserChats";
import UserStripe from "./userstripe/UserStripe";
import MessageStripe from "./messagestripe/MessageStripe";
import { useDispatch, useSelector } from "react-redux";
import { setchatLastid } from "@/app/redux/chatLastid";
import { io } from "socket.io-client";

const ChatRight = () => {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("userToken");
  // const lastchats = localStorage.getItem("chats") || "[]";

  const [chats, Setchats] = useState([]);
  const [chatupdate, Setchatupdate] = useState(true);
  const [lastchatid, Setlastchatid] = useState(5);

  const socket = io.connect("http://localhost:4000");

  socket.on("active-message", (chats) => {
    // console.log("Received Personal Message:", chats);
    Setchats(chats);
  });

  const activegroup = useSelector((state) => state.activegroup.activegroup);
  const activeuser = useSelector((state) => state.activeuser.activeuser);
  const chatLastid = useSelector((state) => state.chatLastid.chatLastid);
  // console.log('chatLastid',chatLastid)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:4000/chat/fetch-chats/resource?id=${
            activegroup && activegroup.id
          }&id=${chatLastid}&id=${activeuser && activeuser.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: userToken,
            },
          }
        );
        const data = await response.json();
        // console.log(data);
        socket.emit("message", data.data.chats);
        if (data.data) {
          // console.log(data.data.chats);
          // Setlastchatid(data.data.chats[data.data.chats.length - 1].id);
          // dispatch(
          //   setchatLastid(data.data.chats[data.data.chats.length - 1].id)
          // );
          // console.log(chatLastid)
          Setchats(data.data.chats);
          socket.emit("join-personalchat", data.data.chats);
          localStorage.setItem("chats", JSON.stringify(data.data.chats));
        } else {
          console.log(data.message);
        }
      } catch (err) {
        console.log(err.message);
        alert(err.message);
      }
    }
    if (userToken) {
      fetchData();
    }
  }, [chatupdate, activegroup, activeuser]);

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
