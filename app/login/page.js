"use client";
import BrandLogo from "@/components/loginpage/BrandLogo";
import CreateaccForm from "@/components/loginpage/CreateaccForm";
import LoginForm from "@/components/loginpage/LoginForm";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [loginform, Setloginform] = useState(true);
  const [login, Setlogin] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      router.push("/");
      Setlogin(true);
    } else {
      Setlogin(false);
    }
  }, [router]);

  // console.log(login);

  return (
    <div className="bg-darkgreen h-60 top">
      {!login && (
        <div className="min-h-screen flex items-center justify-center text-xl text-darkgray">
          <div className="w-5/6 my-16 h-screen mx-40">
            <div className="flex justify-between">
              <BrandLogo />
              {loginform ? (
                <button
                  className="text-2xl text-white mx-4"
                  onClick={() => {
                    Setloginform(false);
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
                    Setloginform(true);
                  }}
                >
                  Already using chatapp?
                  <span className="bg-green px-2 py-1 mx-2 rounded-xl">
                    SIGN IN
                  </span>
                </button>
              )}
            </div>
            {loginform ? <LoginForm /> : <CreateaccForm />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
