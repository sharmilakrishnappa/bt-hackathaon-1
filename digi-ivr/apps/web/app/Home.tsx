// Next.js component
import React from "react";
import Card from "./CardList";

const dataModel = {
  greeting: "Morning",
  name: "Tabitha",
  message: "What can we help you with today?",
  shortDescription: "Lets get you started",
  longDescription:
    "Please select an option from below and use the buttons at the top to navigate.",
};

const Home = () => {
  const displayDataModel = () => {
    return (
      <>
        <div className="w-custom-yellow-banner h-custom-yellow-banner bg-customYellow p-4 flex flex-col items-center justify-center">
          <div className="font-semibold text-[36px] leading-11 text-center text-black">
            {dataModel.greeting} {dataModel.name}
          </div>
          <div className="font-semibold text-[20px] leading-11 text-center text-black mt-2 mb-2 ">
            {dataModel.message}
          </div>
        </div>
        <div className="w-custom-yellow-banner h-custom-yellow-banner  p-4 margin -mt-5 bg-white rounded-[2rem]">
          <div className="rounded-[12px] p-[16px] border border-custom-gray">
            <div className="font-[700] text-[20px] leading-11 text-custom-ee-blue mb-2">
              {dataModel.shortDescription}
            </div>
            <div className="font-[400] text-[16px] leading-11">
              {dataModel.longDescription}
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="h-px my-4 w-[160px] bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div>{displayDataModel()}</div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
