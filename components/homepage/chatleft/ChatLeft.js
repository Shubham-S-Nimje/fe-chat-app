import React, { useEffect, useState } from "react";
import UserStripe from "./userstripe/UserStripe";
import SearchUsers from "./searchusers/SearchUsers";
import GroupsList from "./groupslist/GroupsList";
import { useDispatch } from "react-redux";
import { setGroup } from "@/app/redux/groupslice";

const ChatLeft = (props) => {
  const dispatch = useDispatch();
  const [groups, Setgroups] = useState({});

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:4000/group/fetch-groups`,
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
        if (data.data) {
          // console.log(data.data.groups);
          dispatch(setGroup(data.data.groups));
          Setgroups(data.data.groups);
        } else {
          console.log(data);
        }
      } catch (err) {
        console.log(err);
        alert("error");
      }
    }
    fetchData();
  }, []);

  // console.log(groups)

  return (
    <div className="md:w-1/3 block bg-white">
      <UserStripe />
      <SearchUsers />
      <GroupsList groups={groups} />
    </div>
  );
};

export default ChatLeft;
