import React, { useEffect, useState } from "react";
import Image from "next/image";
import AdduserForm from "./AdduserForm";
import { useSelector } from "react-redux";
import RemoveuserForm from "./RemoveuserForm";
import MakeadminForm from "./MakeadminForm";

const Adminpage = () => {
  const [addUser, setaddUser] = useState(false);
  const [removeUser, setremoveUser] = useState(false);
  const [makeadmin, setmakeadmin] = useState(false);
  const users = useSelector((state) => state.user.users);

  return (
    <div className="min-h-screen">
      <div className="flex justify-end items-center text-white">
        {!makeadmin && (
          <button
            type="button"
            className="m-2 bg-green px-2 py-1 rounded-lg"
            onClick={() => {
              setmakeadmin(!makeadmin);
              // console.log(addUser);
            }}
          >
            Make admin of group
          </button>
        )}

        {makeadmin && (
          <button
            type="button"
            className="m-2 bg-green px-2 py-1 rounded-lg"
            onClick={() => {
              setmakeadmin(!makeadmin);
              // console.log(addUser);
            }}
          >
            Close
          </button>
        )}

        {!addUser && (
          <button
            type="button"
            className="m-2 bg-green px-2 py-1 rounded-lg"
            onClick={() => {
              setaddUser(!addUser);
              // console.log(addUser);
            }}
          >
            Add users in group
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

        {!removeUser && (
          <button
            type="button"
            className="m-2 bg-red-600 px-2 py-1 rounded-lg"
            onClick={() => {
              setremoveUser(!removeUser);
              // console.log(addUser);
            }}
          >
            Remove users from group
          </button>
        )}

        {removeUser && (
          <button
            type="button"
            className="m-2 bg-red-600 px-2 py-1 rounded-lg"
            onClick={() => {
              setremoveUser(!removeUser);
              // console.log(addUser);
            }}
          >
            Close
          </button>
        )}
      </div>
      {makeadmin && <MakeadminForm />}
      {addUser && <AdduserForm />}
      {removeUser && <RemoveuserForm />}
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
