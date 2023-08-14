import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Menubar = () => {
  const router = useRouter();
  const [menuclick, setmenuclick] = useState(false);
  const [logedinUser, setlogedinUser] = useState([]);
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const filteredUser = users.filter((user) => user.email === userEmail);
    setlogedinUser(filteredUser);
  }, [users]);

  // console.log(logedinUser.length);

  return (
    <div className="block">
      <button
        type="button"
        className="px-1 my-2 block cursor-pointer"
        onClick={() => {
          setmenuclick(!menuclick);
          // console.log(menuclick);
        }}
      >
        <Image
          src="/menudots.svg"
          alt="menudots"
          className="w-10 h-auto"
          width={50}
          height={50}
        />
      </button>

      <div
        className={` ${
          menuclick ? "block" : "hidden"
        } absolute rounded-lg my-4 w-fit h-fit p-4 right-0 font-semibold bg-white text-darkgray`}
      >
        {logedinUser.length > 0 && (
          <div className="flex">
            <Image
              src="/user.svg"
              alt="user"
              className=""
              width={50}
              height={50}
            />
            <div className="block m-2">
              <div className="font-semibold">{logedinUser[0].username}</div>
              <div className="text-xs">{logedinUser[0].email}</div>
            </div>
          </div>
        )}
        <hr />
        <button
          type="button"
          className="px-1 my-2 block"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          type="button"
          className="px-1 my-2 block"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Settings
        </button>
        <button
          type="button"
          className="px-2 block bg-green text-white rounded-lg mt-2"
          onClick={() => {
            localStorage.removeItem("userToken");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("chats")
            router.push("/login");
          }}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Menubar;
