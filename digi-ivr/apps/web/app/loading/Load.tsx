"use client";
import { useState, useEffect } from "react";
interface LoaderProps {
  isOpen: boolean;
}

const Load = ({ isOpen }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 200) {
            clearInterval(interval);
          }
          const newProgress = oldProgress + 20;
          return newProgress;
        });
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white p-5 rounded-lg flex  justify-between border border-custom-gray w-[293px] h-[150px]">
        <div className="w-64">
          <h2 className="text-2xl font-bold mb-2 text-center">Loading...</h2>
          <p className="text-center">We are getting you where you need to go</p>
          <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden mt-4">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Load;
