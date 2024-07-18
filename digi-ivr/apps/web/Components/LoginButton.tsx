"use client";
// LoginButton.tsx
import React from "react";
import 'axios';
import axios from "axios";

const LoginButton = () => {
  const getIVR = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/converse', {
        "dialogueId": "be037700-c184-4657-bfdf-ba72e511f8af",
        "sessionId": "99f34c4a3a0e058f84af5aecb01cc5ba"
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitExit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/converse2', {
        "dialogueId": "263339bb-1ca6-4177-93f6-ec0ce1e4cc96",
        "sessionId": "99f34c4a3a0e058f84af5aecb01cc5ba",
        "parameters": [{
          "key": "menuItemId",
          "value": "MOB_PORTIN"
        }]
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <button
      className="mx-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      onClick={() => getIVR()}
    >
      Get IVR
    </button>
    <button
      className="mx-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      onClick={() => submitExit()}
    >
      Submit Exit
    </button>
    </>
    
  );
};

export default LoginButton;
