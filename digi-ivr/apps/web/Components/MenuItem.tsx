"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMenuItemDetails } from "../store/configReducer";
import Image from "next/image";
import { useAppDispatch } from "../store/hooks";

import { useRouter } from "next/navigation";

const MenuItem = ({ itemKey }: { itemKey: string }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const details = useSelector(getMenuItemDetails(itemKey));
  useEffect(() => {
    if (details.actionId) {
      console.log("Hi");
      fetch("http://localhost:5000/api/converse2", {
        method: "POST",
        body: JSON.stringify({{
          "dialogueId": "263339bb-1ca6-4177-93f6-ec0ce1e4cc96",
          "sessionId": "{{divrSessionID}}",
          "parameters": [{
              "key": "menuItemId",
              "value": "MOB_PORTIN"
          }]
      }})
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setData(data.data.value.data));
          router.push("/loading");
        });
    }
  }, [details.actionId]);
  console.log("details", details);
  return (
    <Link href={`/page/${details.nextPageId}`} key={details.id}>
      <div className=" mt-6 mb-7 m-4 w-custom-card-list bg-white-200 border border-custom-gray rounded-lg cursor-pointer">
        <div className="p-4">
          <div className="grid grid-col-3 gap-4">
            <div className="">
              <Image
                src={"/assets/three_g.png"}
                alt={details.name}
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <h2 className="font-[700] text-[20px] leading-11 text-custom-ee-blue mb-2">
                {details.name}
              </h2>
              <div className="">
                <p className="font-[400] text-[16px] leading-11">
                  {details.description}
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/assets/nextLink.svg"}
                alt={"select"}
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
