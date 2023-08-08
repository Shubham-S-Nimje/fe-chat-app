import React from "react";

const LoginForm = () => {
  return (
    <form className="p-12 bg-white items-center text-center justify-center rounded-sm shadow-2xl h-5/6">
      <h3 className="text-3xl m-2">Enter Your Details</h3>
      <p className="text-md m-2">
        Please enter your email and password to log in.
      </p>
      <div className="my-6">
        <label for="email" className="block mb-2">
          Enter email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-1/2 px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <div className="mb-6">
        <label for="password" className="block mb-2">
          Enter password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-1/2 px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-darkgreen text-white py-2 px-4 rounded-sm mx-auto block mt-4 mb-6"
      >
        NEXT
      </button>
      <p className="text-md m-2 text-darkgreen">Link with QR code</p>
    </form>
  );
};

export default LoginForm;
