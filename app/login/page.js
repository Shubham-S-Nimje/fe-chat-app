import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="bg-darkgreen h-60 top">
      <div className="min-h-screen flex items-center justify-center text-xl text-darkgray">
        <div className="w-5/6 my-16 h-screen mx-40">
          <div className="flex mb-8 m-4">
            <Image
              src="/whatsapp.svg"
              alt="Logo"
              className="w-10 h-auto"
              width={50}
              height={50}
            />
            <h2 className="text-md text-white flex m-2">CHATAPP WEB</h2>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
