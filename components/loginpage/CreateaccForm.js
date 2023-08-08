import React, { useState } from "react";

const CreateaccForm = () => {
  const [showPass, SetshowPass] = useState(false);
  const [enteredMail, SetenteredMail] = useState();
  const [enteredpass, Setenteredpass] = useState();
  return (
    <form className="p-12 bg-white items-center text-center justify-center rounded-sm shadow-2xl">
      <h3 className="text-3xl m-2">Enter Your Details</h3>
      <p className="text-md m-2">
        Please enter your details to Create Account.
      </p>
      <div className="my-6">
        <label htmlFor="Username" className="block mb-2">
          Enter Username:
        </label>
        <input
          type="Username"
          name="Username"
          className="w-1/2 px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <div className="my-6">
        <label htmlFor="email" className="block mb-2">
          Enter email:
        </label>
        <input
          type="email"
          name="email"
          className="w-1/2 px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2">
          Enter password:
        </label>
        <input
          type="password"
          name="password"
          className="w-1/2 px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2">
          Confirm password:
        </label>
        <input
          type={`${showPass ? "text" : "password"}`}
          name="password"
          className="w-1/2 px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <input
        type="checkbox"
        className="checked:bg-black"
        onClick={() => {
          console.log(showPass);
          SetshowPass(!showPass);
        }}
      />
      <span className="mx-2">Show password:</span>
      <button
        type="submit"
        className="bg-darkgreen text-white py-2 px-4 rounded-sm mx-auto block mt-4 mb-6"
      >
        NEXT
      </button>
    </form>
  );
};

export default CreateaccForm;