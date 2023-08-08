"use client";
import ChatLeft from "@/components/homepage/chatleft/ChatLeft";
import ChatRight from "@/components/homepage/chatright/ChatRight";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [login, Setlogin] = useState(false);

  useEffect(() => {
    const userToken = (localStorage.getItem("userToken"));
    if (!userToken) {
      router.push("/login");
    }
    else{
    Setlogin(true)}
  }, [router, login]);

  return (
    <main className="flex items-center justify-between bg-background h-screen overflow-hidden">
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
