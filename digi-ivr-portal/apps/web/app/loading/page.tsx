"use client";
import React, { useEffect } from "react";
import Load from "./Load";
import { useRouter } from "next/navigation";

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 1500);
  }, []);

  return <Load isOpen={true} />;
};

export default Loading;
