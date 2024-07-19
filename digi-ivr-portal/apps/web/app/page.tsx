"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
// import dynamic from "next/dynamic";
//import Load from './Load';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../store/hooks";
import { setData, setSessionId } from "../store/configReducer";

export default function FirstPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/converse", {
        method: "POST",
        body: JSON.stringify({
          dialogueId: "70ff19a2-1222-4e07-90c6-32cf549dd9dc",
          identifier: "447996428394",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setSessionId(data.sessionId));
        });
    } catch (error) {
      console.log("error");
    }
    fetch("/api/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData(data.data.value.data));
        router.push("/loading");
      });
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
