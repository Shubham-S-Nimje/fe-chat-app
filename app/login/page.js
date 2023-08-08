import LoginForm from "@/components/loginpage/LoginForm";
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
