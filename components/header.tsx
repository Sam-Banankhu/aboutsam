import React from "react";

export default function header() {
  return (
    <header className="fixed left-0 top-0 z-[999] w-full sm:w-[initial]">
      <div
        className="fixed left-0 top-0 flex h-[4.5rem] w-full !translate-x-0 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 dark:shadow-lg dark:shadow-black/[0.03] sm:left-1/2 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:!-translate-x-1/2 sm:rounded-full"
        // initial={{ y: -100, x: "-50%", opacity: 0 }}
        // animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></div>
    </header>
  );
}
