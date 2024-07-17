import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const LoginButton = dynamic(() => import("./LoginButton"), { ssr: false });

export default function Home() {
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
      </main>
    </div>
  );
}
