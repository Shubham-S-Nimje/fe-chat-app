import Image from "next/image";

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
    <main className="flex min-h-screen items-center justify-between bg-background">
      <div className="w-1/3 block bg-transparent h-screen">
        <div className="flex w-full bg-darkgreen justify-between p-4">
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
        <div className="flex w-full bg-white justify-between p-2">
          <div className="flex justify-between w-full">
            <input
              src="/group.svg"
              placeholder="Search or start new chat"
              className="w-full bg-gray rounded-lg px-4"
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
        <div className="flex max-w-full bg-white justify-between p-1">
          <div className="flex justify-between w-full">
            <Image
              src="/user.svg"
              alt="user"
              className="w-16 h-auto"
              width={50}
              height={50}
            />
            <div className="block m-2 text-start my-auto w-full">
              <div className=" font-bold">Frontend Group</div>
              <div>girish: Happy Friendship day!..</div>
            </div>
            <div className="block m-2 text-center w-1/4">
              <div>12:19 AM</div>
              <div>✔</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 bg-green h-screen">
        <h1>Ready</h1>
      </div>
    </main>
  );
}
