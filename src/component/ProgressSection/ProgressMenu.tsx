import React from "react";
import DarkMode from "./DarkMode";
import TodosDone from "./TodosDone";
import { useProgressMenu } from "~/context/ProgressMenuContext";
import useScreenMedia from "~/hook/useScreenMedia";

const ProgressMenu: React.FC = () => {
  const { isProgressMenuOpen, closeProgressMenu } = useProgressMenu();

  const mediaQueries = useScreenMedia();

  return (
    <>
      <div
        className={`bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 "top-0 right-0" ${
          isProgressMenuOpen || mediaQueries.xl ? "block" : "hidden"
        }`}
      >
        <section className="p-5 flex flex-col h-full">
          <DarkMode />
          <TodosDone />
        </section>
      </div>
      {isProgressMenuOpen && !mediaQueries.xl && (
        <div
          className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
          onClick={closeProgressMenu}
        ></div>
      )}
    </>
  );
};

export default ProgressMenu;
