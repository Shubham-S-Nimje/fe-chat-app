import { setActivegroup } from "@/app/redux/activegrpslice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const GroupsList = (props) => {
  const dispatch = useDispatch();

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
                dispatch(setActivegroup(groupData.id));
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
                <div>{new Date(groupData.createdAt).toLocaleString()}</div>
                <div>✔</div>
              </div>
            </button>
          );
        })}
    </div>
  );
};

export default GroupsList;
