import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTheme } from "../../state/theme";

const SidebarRoute = ({ route, idx }) => {
  const { mode } = useSelector(selectTheme);

  return (
    <Link to={route.path}>
      <li
        key={route.path}
        className={`flex items-center gap-4 w-full h-[48px] cursor-pointer transition rounded-lg pl-2 ${
          mode === "dark" ? "hover:bg-[#303031]" : "hover:bg-[#E4E6E9]"
        }`}
      >
        <div className={`sidebar-icon sidebar-icon-${idx}`} />

        <span className="text-[15px] font-medium">{route.name}</span>
      </li>
    </Link>
  );
};

export default SidebarRoute;
