

import React from "react";
import { useTheme } from "~/context/ThemeContext";

const DarkMode: React.FC = () => {

  const { toggleTheme } = useTheme();
  
  return (
    <button
      className="mt-8 text-left flex items-center justify-between"
      onClick={toggleTheme}
    >
      <span className="dark:text-slate-200">Dark Theme</span>
      <div className="w-10 h-5 bg-slate-200 rounded-full px-0.5 dark:bg-slate-700/[.3] relative flex items-center dark:justify-end">
        <div className="w-4 h-4 rounded-full bg-violet-600 absolute"></div>
      </div>
    </button>
  );
};

export default React.memo(DarkMode);
