import { setActivegroup } from "@/app/redux/activegrpslice";
import { setActiveuser } from "@/app/redux/activeuserslice";
import { setchatLastid } from "@/app/redux/chatLastid";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GroupsList = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  return (
    <div className="h-screen overflow-auto md:py-20">
      {props.groups.length > 0 &&
        props.groups.map((groupData) => {
          // console.log(groupData);
          return (
            <button
              key={groupData.id}
              className="flex max-w-full bg-white justify-between p-1"
              onClick={(e) => {
                dispatch(setActivegroup(groupData));
                dispatch(setActiveuser(null));
                dispatch(setchatLastid(5));
              }}
            >
              <Image
                src="/user.svg"
                alt="user"
                className="w-16 h-auto"
                width={50}
                height={50}
              />
              <div className="block m-2 text-start my-auto w-full">
                <div className="text-xl font-semibold">{groupData.grpname}</div>
                <div>{groupData.description}</div>
              </div>
              <div className="block m-2 text-center w-1/3">
                {/* <div>{groupData.createdAt}</div> */}
                <div>
                  {new Date(groupData.usergroup.createdAt).toLocaleString()}
                </div>
                <div>✔</div>
              </div>
            </button>
          );
        })}

      <div className="h-screen overflow-auto">
        {users &&
          users.map((chatdata) => {
            // console.log(chatdata);
            return (
              <button
                key={chatdata.id}
                className="flex max-w-full bg-white justify-between p-1"
                onClick={(e) => {
                  dispatch(setActiveuser(chatdata));
                  dispatch(setActivegroup(null));
                  dispatch(setchatLastid(5));
                }}
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
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default GroupsList;
