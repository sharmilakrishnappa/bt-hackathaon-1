"use client";
import React from "react";
import MenuList from "../../Components/MenuList";
import styles from "../page.module.css";
import { useSelector } from "react-redux";
import { getStartingPageData } from "../../store/configReducer";

const Home = () => {
  const startingPageData = useSelector(getStartingPageData);
  console.log("startingPageData", startingPageData);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="App">
          <div>
            {startingPageData.topNav ? (
              <div className="w-custom-yellow-banner h-custom-yellow-banner bg-customYellow p-4 flex flex-col items-center justify-center">
                <div className="font-semibold text-[36px] leading-11 text-center text-black">
                  {startingPageData.topNav.greeting}
                </div>
                <div className="font-semibold text-[20px] leading-11 text-center text-black mt-2 mb-2 ">
                  {startingPageData.topNav.message}
                </div>
              </div>
            ) : null}
            <div className="w-custom-yellow-banner h-custom-yellow-banner p-4 margin -mt-5 bg-white rounded-[2rem]">
              {startingPageData.banner ? (
                <div className="rounded-[12px] p-[16px] border border-custom-gray">
                  <div className="font-[700] text-[20px] leading-11 text-custom-ee-blue mb-2">
                    {startingPageData.banner.title}
                  </div>
                  <div className="font-[400] text-[0.8rem] leading-11">
                    {startingPageData.banner.body}
                  </div>
                </div>
              ) : null}
              <div className="flex justify-center">
                <hr className="h-px mt-4 w-[160px] bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
              <MenuList items={startingPageData.menuItemIds} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
