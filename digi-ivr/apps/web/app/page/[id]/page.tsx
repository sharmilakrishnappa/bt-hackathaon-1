"use client";
import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { getPageDetails } from "../../../store/configReducer";
import MenuList from "../../../Components/MenuList";
import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const pageDetails = useAppSelector(getPageDetails(params.id));
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="App">
          {pageDetails.sheetNav ? (
            <div className="flex justify-between">
              {pageDetails.sheetNav.backButtonVisible ? (
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    router.back();
                  }}
                >
                  <Image
                    src={"/assets/back.svg"}
                    alt={"Back"}
                    width={25}
                    height={25}
                  />
                </Link>
              ) : null}
              <h1>{pageDetails.sheetNav.title}</h1>
              {pageDetails.sheetNav.closeButtonVisible ? (
                <Image
                  src={"/assets/home.svg"}
                  alt={"Back"}
                  width={25}
                  height={25}
                />
              ) : null}
            </div>
          ) : null}
          <MenuList items={pageDetails.menuItemIds} />
        </div>
      </main>
    </div>
  );
};

export default Page;
