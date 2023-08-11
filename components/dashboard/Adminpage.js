import React, { useEffect, useState } from "react";
import Image from "next/image";
import AdduserForm from "./AdduserForm";

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

const Adminpage = () => {
  const [addUser, setaddUser] = useState(false);
  const [users, Setusers] = useState();
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/auth/fetch-users`);
        const data = await response.json();

        // console.log(data);
        Setusers(data.users.users);
      } catch {
        alert("error");
      }
    }
    {
      userToken && fetchData();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex justify-end items-center text-white">
        {!addUser && (
          <button
            type="button"
            className="m-2 bg-green px-2 py-1 rounded-lg"
            onClick={() => {
              setaddUser(!addUser);
              // console.log(addUser);
            }}
          >
            Add New User
          </button>
        )}
        {addUser && (
          <button
            type="button"
            className="m-2 bg-green px-2 py-1 rounded-lg"
            onClick={() => {
              setaddUser(!addUser);
              // console.log(addUser);
            }}
          >
            Close
          </button>
        )}
      </div>
      {addUser && <AdduserForm />}
      <div className="h-screen overflow-auto">
        {users &&
          users.map((chatdata) => {
            // console.log(chatdata);
            return (
              <div
                key={chatdata.id}
                className="flex max-w-full bg-white justify-between ite p-1"
              >
                <Image
                  src="/user.svg"
                  alt="user"
                  className="w-16 h-auto"
                  width={50}
                  height={50}
                />
                <div className="block m-2 text-start my-auto w-full">
                  <div className="text-xl font-semibold">
                    {chatdata.username}
                  </div>
                  <div>{chatdata.email}</div>
                </div>
                <div className="block m-2 text-center w-1/3">
                  <div>{new Date(chatdata.updatedAt).toLocaleString()}</div>
                  <div>✔</div>
                </div>
                <button
                  type="button"
                  className="m-2"
                  // onClick={() => {
                  //   setmenuclick(!menuclick);
                  //   // console.log(menuclick);
                  // }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="m-2"
                  // onClick={() => {
                  //   setmenuclick(!menuclick);
                  //   // console.log(menuclick);
                  // }}
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Adminpage;
