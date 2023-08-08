import Image from "next/image";
import { Fragment } from "react";

const obj = [
  {
    id: 1,
    title: "group1",
    message: "this is message",
  },
  {
    id: 2,
    title: "group2",
    message: "this is message",
  },
  {
    id: 3,
    title: "group3",
    message: "this is message",
  },
  {
    id: 4,
    title: "group4",
    message: "this is message",
  },
  {
    id: 5,
    title: "group5",
    message: "this is message",
  },
  {
    id: 6,
    title: "group6",
    message: "this is message",
  },
  {
    id: 7,
    title: "group7",
    message: "this is message",
  },
  {
    id: 8,
    title: "group8",
    message: "this is message",
  },
  {
    id: 9,
    title: "group9",
    message: "this is message",
  },
  {
    id: 10,
    title: "group10",
    message: "this is message",
  },
];

export default function Home() {
  return (
    <main className="flex items-center justify-between bg-background h-screen overflow-hidden">
      <div className="w-1/3 block bg-white">
        <div className="flex w-full bg-darkgreen justify-between p-4 sticky top-0">
          <div className="flex">
            <Image
              src="/group.svg"
              alt="group"
              className="w-8 m-2 h-auto"
              width={50}
              height={50}
            />
          </div>
          <div className="flex">
            <Image
              src="/group.svg"
              alt="group"
              className="w-8 mx-4 h-auto"
              width={50}
              height={50}
            />
            <Image
              src="/message.svg"
              alt="message"
              className="w-8 mx-4 h-auto"
              width={50}
              height={50}
            />
            <Image
              src="/menudots.svg"
              alt="menudots"
              className="w-8 mx-4 h-auto"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="flex w-full bg-white justify-between p-2 sticky top-20 shadow-md">
          <div className="flex justify-between w-full">
            <input
              src="/group.svg"
              placeholder="Search or start new chat"
              className="w-full bg-gray rounded-full px-4"
            />
            <Image
              src="/menu.svg"
              alt="menu"
              className="w-8 h-auto m-2"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="h-screen overflow-auto py-20 text-darkg">
          {obj.map((chatdata) => {
            // console.log(chatdata);
            return (
              <div
                key={chatdata.id}
                className="flex max-w-full bg-white justify-between p-1"
              >
                <Image
                  src="/user.svg"
                  alt="user"
                  className="w-16 h-auto"
                  width={50}
                  height={50}
                />
                <div className="block m-2 text-start my-auto w-full">
                  <div className="text-xl font-bold">{chatdata.title}</div>
                  <div>{chatdata.message}</div>
                </div>
                <div className="block m-2 text-center w-1/3">
                  <div>12:19 AM</div>
                  <div>✔</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-2/3 block text-white h-screen border-l-2 border-gray">
        <div className="flex w-full bg-darkgreen justify-between p-4 sticky top-0">
          <div className="flex">
            <Image
              src="/group.svg"
              alt="group"
              className="w-16 h-auto"
              width={50}
              height={50}
            />
          </div>
          <div className="block m-4 text-start my-auto w-full">
            <div className="text-xl font-bold">Frontend Group</div>
            <div>girish, hrushi, shubham, nayan, vaibhav, etc</div>
          </div>
          <Image
            src="/search.svg"
            alt="search"
            className="w-8 mx-4 h-auto"
            width={50}
            height={50}
          />
          <Image
            src="/menudots.svg"
            alt="menudots"
            className="w-8 mx-4 h-auto"
            width={50}
            height={50}
          />
        </div>
        <div className="h-screen overflow-auto pb-40 text-black">
          {obj.map((chatdata) => {
            // console.log(chatdata);
            return (
              <div
                key={chatdata.id}
                className="flex max-w-full justify-between p-1"
              >
                <Image
                  src="/user.svg"
                  alt="user"
                  className="w-16 h-auto"
                  width={50}
                  height={50}
                />
                <div className="block m-2 text-start my-auto w-full">
                  <div className="text-xl font-bold">{chatdata.title}</div>
                  <div>{chatdata.message}</div>
                </div>
                <div className="block m-2 text-center w-1/3">
                  <div>12:19 AM</div>
                  <div>✔</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-ful justify-between p-2 sticky bottom-0 shadow-md">
          <div className="flex justify-between w-full px-2 bg-gray rounded-full">
            <Image
              src="/emoji.svg"
              alt="emoji"
              className="w-12 h-auto p-1"
              width={50}
              height={50}
            />
            <input
              src="/group.svg"
              placeholder="Message"
              className="w-full bg-white rounded-full px-4 m-2"
            />
            <Image
              src="/clip.svg"
              alt="clip"
              className="w-12 h-auto p-3"
              width={50}
              height={50}
            />
            <Image
              src="/camera.svg"
              alt="camera"
              className="w-12 h-auto p-3"
              width={50}
              height={50}
            />
          </div>
          <Image
            src="/mic.svg"
            alt="mic"
            className=" bg-back"
            width={50}
            height={50}
          />
        </div>
      </div>
    </main>
  );
}
