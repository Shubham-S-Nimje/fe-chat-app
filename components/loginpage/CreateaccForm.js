import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateaccForm = () => {
  const router = useRouter();
  const [showPass, SetshowPass] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [phoneLength, setphoneLength] = useState(true);
  const [enteredusername, Setenteredusername] = useState("");
  const [enteredMail, SetenteredMail] = useState("");
  const [enteredphon, Setenteredphon] = useState("");
  const [enteredpass, Setenteredpass] = useState("");
  const [enteredconfirmpass, Setenteredconfirmpass] = useState("");

  const onCreateaccHandler = async (e) => {
    e.preventDefault();
    // console.log(enteredusername, enteredMail, enteredpass, enteredconfirmpass);

    const obj = {
      username: enteredusername,
      email: enteredMail,
      password: enteredpass,
      phonenumber: enteredphon,
    };

    if (enteredpass === enteredconfirmpass) {
      try {
        const response = await fetch("http://localhost:4000/auth/add-user", {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          alert(data.message);
          router.push("/");
        } else {
          const errData = await response.json();
          // console.log(errData);
          alert(errData.error.errors[0].message);
        }
      } catch {
        (err) => {
          // console.log(err);
          alert(err);
        };
      }
    } else {
      alert("Please check your password");
    }
  };

  return (
    <form
      className="p-12 max-md:p-10 bg-white items-center text-center justify-center rounded-lg shadow-2xl max-sm:text-sm"
      onSubmit={onCreateaccHandler}
    >
      <h3 className="text-3xl  max-sm:text-lg m-2">Enter Your Details</h3>
      <p className="text-md  max-sm:text-sm m-2">
        Please enter your details to Create Account.
      </p>
      <div className="my-6">
        <label htmlFor="Username" className="block mb-2">
          Enter Username:
        </label>
        <input
          type="Username"
          name="Username"
          onChange={(e) => {
            Setenteredusername(e.target.value);
          }}
          className="w-1/2 max-sm:w-full px-4 py-2 border rounded-sm border-darkgray"
          required
        />
      </div>
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
      <div className="my-6">
        <label htmlFor="phonenumber" className="block mb-2">
          Mobile Number:
        </label>
        <input
          type="number"
          name="phonenumber"
          onChange={(e) => {
            Setenteredphon(e.target.value);
            setphoneLength(enteredphon.length >= 9 && enteredphon.length < 12);
          }}
          className="w-1/2 max-sm:w-full px-4 py-2 border rounded-sm border-darkgray"
          required
        />
        {!phoneLength && <p className="text-red-500">Invalid mobile number!</p>}
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
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2">
          Confirm password:
        </label>
        <input
          type={`${showPass ? "text" : "password"}`}
          name="password"
          onChange={(e) => {
            Setenteredconfirmpass(e.target.value);
            setPasswordsMatch(enteredpass === e.target.value);
          }}
          className="w-1/2 max-sm:w-full px-4 py-2 border rounded-sm border-darkgray"
          required
        />
        {!passwordsMatch && (
          <p className="text-red-500">Passwords do not match.</p>
        )}
      </div>
      <input
        type="checkbox"
        className="checked:bg-black"
        onClick={() => {
          // console.log(showPass);
          SetshowPass(!showPass);
        }}
      />
      <span className="mx-2">Show password:</span>
      <button
        type="submit"
        className="bg-darkgreen text-white py-2 px-4 rounded-sm mx-auto block mt-4 mb-6"
      >
        NEXT
      </button>
    </form>
  );
};

export default CreateaccForm;
