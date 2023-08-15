"use client";
import Menubar from "@/components/common/Menubar";
import ChatLeft from "@/components/homepage/chatleft/ChatLeft";
import ChatRight from "@/components/homepage/chatright/ChatRight";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userslice";
import { setislogedin } from "./redux/authslice";

const Home = () => {
  const router = useRouter();
  const [login, Setlogin] = useState(false);
  const [showusers, Setshowusers] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      dispatch(setislogedin(true));
    } else {
      dispatch(setislogedin(false));
    }
  }, [login]);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      router.push("/login");
    } else {
      Setlogin(true);
    }
  }, [router, login]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/auth/fetch-users`);
        const data = await response.json();

        // console.log(data.users.users);
        dispatch(setUser(data.users.users));
      } catch {
        alert("error");
      }
    }
    {
      login && fetchData();
    }
  }, [login]);

  return (
    <main className="sm:block sm:w-screen md:flex items-center justify-between bg-background h-screen overflow-hidden">
      <div className="flex w-full bg-darkgreen justify-between items-center p-4 sticky top-0 md:hidden">
        <div className="flex items-center">
          <Image
            src="/whatsapp.svg"
            alt="whatsapp"
            className="w-8 m-2 h-auto max-sm:w-6"
            width={50}
            height={50}
          />
          <p className="text-md font-semibold text-white min-w-full">
            CHATAPP WEB
          </p>
        </div>
        <div className="flex">
          <button
            type="button"
            className="px-1 my-2 block cursor-pointer"
            onClick={() => {
              Setshowusers(!showusers);
              // console.log(menuclick);
            }}
          >
            {!showusers && (
              <Image
                src="/group.svg"
                alt="group"
                className="w-8 mx-4 h-auto max-sm:w-6"
                width={50}
                height={50}
              />
            )}
            {showusers && (
              <Image
                src="/message.svg"
                alt="message"
                className="w-8 mx-4 h-auto max-sm:w-6"
                width={50}
                height={50}
              />
            )}
          </button>
          <Menubar />
        </div>
      </div>
      {login && (
        <div className="md:hidden">
          {showusers && <ChatLeft />}
          {!showusers && <ChatRight />}
        </div>
      )}
      {login && (
        <Fragment>
          <ChatLeft />
          <ChatRight />
        </Fragment>
      )}
    </main>
  );
};

export default Home;
