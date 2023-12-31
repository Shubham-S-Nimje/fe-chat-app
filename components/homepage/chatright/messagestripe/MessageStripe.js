import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const MessageStripe = (props) => {
  const [enteredMessage, setenteredMessage] = useState("");
  const userToken = localStorage.getItem("userToken");
  const activegroup = useSelector((state) => state.activegroup.activegroup);
  const activeuser = useSelector((state) => state.activeuser.activeuser);
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef(null);

  // console.log("activegroup", activegroup);

  const messageSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(enteredMessage);

    const obj = {
      message: enteredMessage,
      activegrpid: activegroup && activegroup.id,
      activeuserid: activeuser && activeuser.id,
    };

    try {
      const response = await fetch("http://localhost:4000/chat/add-chat", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization: userToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setenteredMessage("");
        props.Setchatupdate(!props.chatupdate);
      } else {
        const errData = await response.json();
        // console.log(errData);
        alert(errData);
      }
    } catch {
      (err) => {
        // console.log(err);
        alert(err);
      };
    }
  };

  const openImageInput = () => {
    imageInputRef.current.click();
  };

  const imageUploadHandler = async (e) => {
    e.preventDefault();

    setSelectedImage(e.target.files[0]);
    console.log(selectedImage);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("activegrpid", activegroup && activegroup.id);
    formData.append("activeuserid", activeuser && activeuser.id);

    console.log(formData);

    try {
      const response = await fetch("http://localhost:4000/chat/add-image", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: localStorage.getItem("userToken"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // setEnteredMessage("");
        props.setChatUpdate(!props.chatUpdate);
      } else {
        const errData = await response.json();
        console.log(errData);
        alert(errData.error);
      }
    } catch (error) {
      console.error("Error sending image:", error);
      alert("An error occurred while sending the image.");
    }
  };

  return (
    <div className="flex w-ful justify-between p-2 sticky bottom-0 shadow-md">
      <form
        onSubmit={messageSubmitHandler}
        className="flex justify-between w-full px-2 bg-gray rounded-full"
      >
        <Image
          src="/emoji.svg"
          alt="emoji"
          className="w-12 h-auto p-1"
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

        <input
          type="file"
          className="hidden"
          onChange={imageUploadHandler}
          ref={imageInputRef}
        />
        <button
          type="button"
          onClick={openImageInput}
          className="w-12 h-auto p-2"
        >
          <Image
            src="/clip.svg"
            alt="clip"
            className="w-12 h-auto"
            width={50}
            height={50}
          />
        </button>

        <input
          src="/group.svg"
          placeholder="Message"
          className="w-full bg-white text-black rounded-full px-4 m-2"
          value={enteredMessage}
          onChange={(e) => {
            setenteredMessage(e.target.value);
          }}
        />
        <button type="submit" className="w-12 h-auto p-1">
          <Image src="/send.svg" alt="send" width={50} height={50} />
        </button>
      </form>
      <Image
        src="/mic.svg"
        alt="mic"
        className=" bg-back"
        width={50}
        height={50}
      />
    </div>
  );
};

export default MessageStripe;
