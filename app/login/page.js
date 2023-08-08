"use client";
import BrandLogo from "@/components/loginpage/BrandLogo";
import CreateaccForm from "@/components/loginpage/CreateaccForm";
import LoginForm from "@/components/loginpage/LoginForm";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const [login, Setlogin] = useState(true);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  
  console.log(isAuth);

  return (
    <div className="bg-darkgreen h-60 top">
      <div className="min-h-screen flex items-center justify-center text-xl text-darkgray">
        <div className="w-5/6 my-16 h-screen mx-40">
          <div className="flex justify-between">
            <BrandLogo />
            {login ? (
              <button
                className="text-2xl text-white mx-4"
                onClick={() => {
                  Setlogin(false);
                }}
              >
                Don't you have an account?
                <span className="bg-green px-2 py-1 mx-2 rounded-xl">
                  SIGN UP
                </span>
              </button>
            ) : (
              <button
                className="text-2xl text-white mx-4"
                onClick={() => {
                  Setlogin(true);
                }}
              >
                Already using chatapp?
                <span className="bg-green px-2 py-1 mx-2 rounded-xl">
                  SIGN IN
                </span>
              </button>
            )}
          </div>
          {login ? <LoginForm /> : <CreateaccForm />}
        </div>
      </div>
    </div>
  );
};

export default Login;
