import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { getMenuItemDetails } from "../store/configReducer";
import Image from "next/image";

const MenuItem = ({ itemKey }: { itemKey: string }) => {
  const details = useSelector(getMenuItemDetails(itemKey));
  console.log("details", details);
  return (
    <Link href={`/page/${details.nextPageId}`} key={details.id}>
      <div className=" mt-6 m-4 p-6 w-custom-card-list h-custom-card-list bg-white-200 border-[1px] border-custom-gray rounded-lg hover:bg-custom-gray cursor-pointer">
        <div className="grid">
          <div className="col-span-3 ...">
            <Image
              src={"/assets/three_g.png"}
              alt={details.name}
              width={50}
              height={50}
            />
          </div>
          <div className="col-span-8">
            <h2 className="font-[700] text-[20px] leading-11 text-custom-ee-blue mb-2">
              {details.name}
            </h2>
            <div className="">
              <p className="font-[400] text-[16px] leading-11">
                {details.description}
              </p>
            </div>
          </div>
          <div className="col-span-3 ...">
            <Image
              src={"/assets/nextLink.svg"}
              alt={"select"}
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
