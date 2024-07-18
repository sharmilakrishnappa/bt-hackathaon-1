"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
//import Load from './Load';
import MainPage from "./Home";

const LoginButton = dynamic(() => import("./LoginButton"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // Start loading when the component mounts
  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <LoginButton />
        <div className="App">
          {/*<Load isOpen={isLoading} />*/}
          <MainPage />
        </div>
      </main>
    </div>
  );
}
