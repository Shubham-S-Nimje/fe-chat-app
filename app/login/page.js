import BrandLogo from "@/components/loginpage/BrandLogo";
import LoginForm from "@/components/loginpage/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div className="bg-darkgreen h-60 top">
      <div className="min-h-screen flex items-center justify-center text-xl text-darkgray">
        <div className="w-5/6 my-16 h-screen mx-40">
          <BrandLogo/>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
