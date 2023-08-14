import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const MakeadminForm = (props) => {
  const userToken = localStorage.getItem("userToken");
  const router = useRouter();
  const groups = useSelector((state) => state.group.groups);
  const users = useSelector((state) => state.user.users);

  // console.log(groups, users);
  // console.log(users)

  const [enteredgroup, Setenteredgroup] = useState("");
  const [entereduser, Setentereduser] = useState("");

  const onFormsubmit = (e) => {
    e.preventDefault();
    // console.log(enteredgroup, entereduser);

    const obj = {
      groupId: enteredgroup,
      userId: entereduser,
    };

    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:4000/group/makeadmin-ofgroup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: userToken,
            },
            body: JSON.stringify(obj),
          }
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          console.log(response);
          props.setmakeadmin(false)
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
        alert("error");
      }
    }
    fetchData();

    // router.push("/");
  };

  return (
    <form
      className="p-12 max-md:p-10 bg-white items-center text-center justify-center rounded-lg shadow-2xl max-sm:text-sm"
      onSubmit={onFormsubmit}
    >
      <h3 className="text-3xl max-sm:text-lg m-2">Make users admin of group</h3>
      <p className="text-md max-sm:text-sm m-2">
        Please select group then user and submit.
      </p>
      <div className="my-6">
        <label htmlFor="Group" className="block mb-2">
          Select group:
        </label>
        <select
          required
          className="w-full rounded-md border-2 p-2 my-2"
          onChange={(e) => {
            // console.log(e.target.value);
            Setenteredgroup(e.target.value);
          }}
        ><option>Select group</option>
          {groups.map((group) => {
            return <option key={group.id} value={`${group.id}`}>{group.grpname}</option>;
          })}
        </select>
      </div>
      <div className="my-6">
        <label htmlFor="User" className="block mb-2">
          Select user:
        </label>
        <select
          required
          className="w-full rounded-md border-2 p-2 my-2"
          defaultValue={''}
          onChange={(e) => {
            // console.log(e.target.value);
            Setentereduser(e.target.value);
          }}
        ><option >Select User</option>
          {users.map((user) => {
            return <option key={user.id} value={`${user.id}`}>{user.username}</option>;
          })}
        </select>
      </div>
      <button
        type="submit"
        className="bg-darkgreen text-white py-2 px-4 rounded-sm mx-auto block mt-4 mb-6"
      >
        NEXT
      </button>
    </form>
  );
};

export default MakeadminForm;
