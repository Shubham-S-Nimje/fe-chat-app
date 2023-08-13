import React, { useState } from "react";

const CreategrpForm = () => {
  const [enteredgrpname, Setenteredgrpname] = useState("");
  const [enteredDesc, SetenteredDesc] = useState("");
  const userToken = localStorage.getItem("userToken");

  const onCreategrpHandler = async (e) => {
    e.preventDefault();

    const obj = {
      grpname: enteredgrpname,
      description: enteredDesc,
    };

    try {
      const response = await fetch("http://localhost:4000/group/create-group", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization: userToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const errData = await response.json();
        console.log(errData);
      }
    } catch {
      (err) => {
        console.log(err);
        alert(err);
      };
    }
  };

  return (
    <form
      className="p-6 max-md:p-5 bg-white text-black items-center text-center justify-center rounded-lg shadow-2xl max-sm:text-sm"
      onSubmit={onCreategrpHandler}
    >
      <h3 className="text-3xl  max-sm:text-lg m-2">Create new group</h3>
      <p className="text-md  max-sm:text-sm m-2">
        Please enter details to create new group.
      </p>
      <div className="my-6">
        <label htmlFor="Groupname" className="block mb-2">
          Group Name:
        </label>
        <input
          type="text"
          name="Groupname"
          onChange={(e) => {
            Setenteredgrpname(e.target.value);
          }}
          className="px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <div className="my-6">
        <label htmlFor="description" className="block mb-2">
          Enter description:
        </label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            SetenteredDesc(e.target.value);
          }}
          className="px-4 py-2 border rounded-sm border-darkgray"
          required
        />
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

export default CreategrpForm;
