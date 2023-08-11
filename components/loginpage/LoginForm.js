import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [enteredMail, SetenteredMail] = useState("");
  const [enteredpass, Setenteredpass] = useState("");
  const router = useRouter();

  const OnloginHandler = async (e) => {
    e.preventDefault();
    // console.log(enteredMail, enteredpass);

    const obj = {
      email: enteredMail,
      password: enteredpass,
    };

    try {
      const response = await fetch("http://localhost:4000/auth/login-user", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        localStorage.setItem("userToken", data.user.authToken);
        localStorage.setItem("userEmail", enteredMail);
        router.push("/");
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
  return (
    <form
      className="p-12 max-md:p-10 bg-white items-center text-center justify-center rounded-lg shadow-2xl max-sm:text-sm"
      onSubmit={OnloginHandler}
    >
      <h3 className="text-3xl max-sm:text-lg m-2">Enter Your Details</h3>
      <p className="text-md max-sm:text-sm m-2">
        Please enter your email and password to log in.
      </p>
      <div className="my-6">
        <label htmlFor="email" className="block mb-2">
          Enter email:
        </label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            SetenteredMail(e.target.value);
          }}
          className="w-1/2 max-sm:w-full px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2">
          Enter password:
        </label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            Setenteredpass(e.target.value);
          }}
          className="w-1/2 max-sm:w-full px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-darkgreen text-white py-2 px-4 rounded-sm mx-auto block mt-4 mb-6"
      >
        NEXT
      </button>
      <p className="text-md m-2 text-darkgreen">Link with QR code</p>
    </form>
  );
};

export default LoginForm;
