"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
// import dynamic from "next/dynamic";
//import Load from './Load';
import Image from "next/image";
import { useRouter } from "next/navigation";
// const LoginButton = dynamic(() => import("./LoginButton"), { ssr: false });
/* <LoginButton /> */

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log("timeout over");
      router.push("/loading");
    }, 900);
  }, [router]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="App">
          <Image
            src="/assets/EEbrandLogo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </main>
    </div>
  );
}
