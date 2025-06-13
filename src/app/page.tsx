"use client";
import React from "react";

import PasswordInput from "@/components/PasswordInput";
import { handleSignInGoogle, handleSignOutGoogle } from "../lib/authGoogle";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(90deg,#e2e2e2,#9096aa)] font-poppins">
      <div className="relative w-[850px] h-[550px] bg-white m-5 rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden flex">
        {/* Left Button Panel */}
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center gap-4 p-6">
          <h2 className="text-gray-800 font-semibold font-[DM Sans]">
            Sign in with
          </h2>
          <button
            className="flex items-center justify-center gap-2 w-40 h-11 bg-white text-gray-700 font-semibold font-poppins rounded-full shadow-md hover:scale-105 transition-all duration-300 border border-gray-300"
            onClick={() => {
              signIn("google", { callbackUrl: "/user?provider=google" });
            }}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Google</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 w-40 h-11 bg-white text-[#1877F2] text-sm leading-none font-medium font-poppins rounded-full shadow-md hover:scale-105 transition-all duration-300"
            onClick={() => {
              alert("Facebook Sign In Clicked");
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span>Facebook</span>
          </button>

          <button
            className="flex items-center justify-center gap-2 w-40 h-11 bg-white text-[#1DA1F2] text-sm leading-none font-medium font-poppins rounded-full shadow-md hover:scale-105 transition-all duration-300"
            onClick={() => {
              alert("Twitter Sign In Clicked");
              signIn("twitter", { callbackUrl: "/user?provider=twitter" });
            }}
          >
            <img
              src="https://abs.twimg.com/favicons/twitter.2.ico"
              alt="Twitter"
              className="w-5 h-5"
            />
            <span>X / Twitter</span>
          </button>
        </div>

        {/* Right Form Panel */}
        <div className="w-1/2 h-full bg-white flex items-center text-center text-gray-800 p-10 transition-all duration-[1200ms] ease-in-out z-[1] form-box">
          <form className="w-full">
            <h1 className="text-[36px] mb-[-10px]">Welcome</h1>
            <p className="text-[14.5px] my-4">Sign in to continue</p>

            <div className="relative my-6">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 pr-12 bg-[#eee] rounded-lg border-none outline-none text-[16px] font-medium placeholder:text-gray-500 placeholder:font-normal"
              />
              <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl">
                👩🏻‍💻​
              </span>
            </div>

            <div className="relative my-6">
              <PasswordInput />
            </div>

            <div className="mb-4 text-[14.5px]">
              <a href="#" className="text-gray-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[linear-gradient(90deg,#e2e2e2,#9096aa)] rounded-lg shadow-md text-white font-semibold text-[16px]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
