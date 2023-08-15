// import { setActivechats } from "@/app/redux/chatsslice";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { io } from "socket.io-client";

// const Socket = () => {
//   const dispatch = useDispatch();
//   //   const data = useSelector((state) => state);
//   const setislogedin = useSelector((state) => state.authentication.islogedin);
//   const user = useSelector((state) => state.user.users);
//   const group = useSelector((state) => state.group.groups);
//   const activegroup = useSelector((state) => state.activegroup.activegroup);
//   const activeuser = useSelector((state) => state.activeuser.activeuser);
//   const chatLastid = useSelector((state) => state.chatLastid.chatLastid);
//   const activechats = useSelector((state) => state.activechats.activechats);
//   //   console.log(activechats);

//   const socket = io.connect("http://localhost:4000");

//   useEffect(() => {
//     socket.emit("join-groupchat", activegroup);
//   }, [activegroup]);

//   useEffect(() => {
//     socket.emit("join-personalchat", activeuser);
//   }, [activeuser]);

//   useEffect(() => {
//     socket.on("active-message", (chats) => {
//       console.log("Received Personal Message:", chats);
//       // dispatch(setActivechats(chats));
//     });

//     return () => {
//       socket.off("active-message");
//     };
//   }, []);

//   return <div></div>;
// };

// export default Socket;
