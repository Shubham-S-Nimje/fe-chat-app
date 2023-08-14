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
  const groups = useSelector((state) => state.group);
  // console.log(groups.groups)

  return (
    <div className="min-h-screen">
      <div className="flex justify-end items-center text-white">
        {!makeadmin && (
          <button
            type="button"
            className="m-2 bg-violet-950 px-2 py-1 rounded-lg"
            onClick={() => {
              setmakeadmin(true);
              setremoveUser(false);
              setaddUser(false);
              // console.log(addUser);
            }}
          >
            Make admin of group
          </button>
        )}

        {!addUser && (
          <button
            type="button"
            className="m-2 bg-green px-2 py-1 rounded-lg"
            onClick={() => {
              setmakeadmin(false);
              setremoveUser(false);
              setaddUser(true);
              // console.log(addUser);
            }}
          >
            Add users in group
          </button>
        )}

        {!removeUser && (
          <button
            type="button"
            className="m-2 bg-red-600 px-2 py-1 rounded-lg"
            onClick={() => {
              setmakeadmin(false);
              setremoveUser(true);
              setaddUser(false);
              // console.log(addUser);
            }}
          >
            Remove users from group
          </button>
        )}
      </div>

      {makeadmin && (
        <div className="text-end bg-darkgreen p-2 rounded-lg border-2 border-white m-10">
          <button
            type="button"
            className="m-2 bg-red-600 px-2 py-1 rounded-lg text-white font-semibold"
            onClick={() => {
              setmakeadmin(false);
              setremoveUser(false);
              setaddUser(false);
              // console.log(addUser);
            }}
          >
            Close
          </button>
          <MakeadminForm setmakeadmin={setmakeadmin}/>
        </div>
      )}

      {addUser && (
        <div className="text-end bg-darkgreen p-2 rounded-lg border-2 border-white m-10">
          <button
            type="button"
            className="m-2 bg-red-600 px-2 py-1 rounded-lg text-white font-semibold"
            onClick={() => {
              setmakeadmin(false);
              setremoveUser(false);
              setaddUser(false);
              // console.log(addUser);
            }}
          >
            Close
          </button>
          <AdduserForm setaddUser={setaddUser}/>
        </div>
      )}

      {removeUser && (
        <div className="text-end bg-darkgreen p-2 rounded-lg border-2 border-white m-10">
          <button
            type="button"
            className="m-2 bg-red-600 px-2 py-1 rounded-lg text-white font-semibold"
            onClick={() => {
              setmakeadmin(false);
              setremoveUser(false);
              setaddUser(false);
              // console.log(addUser);
            }}
          >
            Close
          </button>
          <RemoveuserForm setremoveUser={setremoveUser}/>
        </div>
      )}
      <div className="h-screen overflow-auto">
        <h3 className="text-3xl max-sm:text-lg flex justify-center bg-green rounded-lg m-2 p-2 font-semibold text-white">
          Your group list
        </h3>
        {groups.groups &&
          groups.groups.map((chatdata) => {
            // console.log(chatdata);
            return (
              <div
                key={chatdata.id}
                className="flex max-w-full bg-white justify-between ite p-1 rounded-lg m-2"
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
                    {chatdata.grpname}
                  </div>
                  <div>{chatdata.description}</div>
                </div>
                <div className="block m-2 text-center w-1/3">
                  <div>{new Date(chatdata.usergroup.updatedAt).toLocaleString()}</div>
                  <div>✔</div>
                </div>
                {/* <button
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
                </button> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Adminpage;
