import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sidebarRoutes } from "../../app/routes/sidebarRoutes";
import { selectTheme } from "../../state/theme";
import SidebarRoute from "../SidebarRoute";

const Sidebar = () => {
  const { mode } = useSelector(selectTheme);
  const limit = 10;
  const [isShowFull, setIsShowFull] = useState(false);

  return (
    <ul className="h-screen overflow-y-scroll p-4 scrollbar-hide sticky max-w-[350px]">
      <Link
        to="/nguyenluhoangsang01"
        className={`flex items-center gap-4 w-full h-[48px] cursor-pointer transition rounded-lg ${
          mode === "dark" ? "hover:bg-[#303031]" : "hover:bg-[#E4E6E9]"
        }`}
      >
        <li className="pl-2 flex items-center gap-4">
          <div>
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/295865964_785774115910590_4688402722710114299_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TPblBacxZhIAX9gNWWP&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfArAPQC2wBM_jsz4RvkMjnyTrNOhh3XhWnpqK-a9WpVGQ&oe=6398C5BE"
              alt="Nguyễn Lữ Hoàng Sang"
              className="w-[36px] h-[36px] rounded-full object-cover"
            />
          </div>
          <span className="text-[15px] font-medium">Nguyễn Lữ Hoàng Sang</span>
        </li>
      </Link>

      {sidebarRoutes.length > limit && !isShowFull
        ? sidebarRoutes
            .slice(0, limit)
            .map((route, idx) => (
              <SidebarRoute route={route} idx={idx} key={route.path} />
            ))
        : sidebarRoutes.map((route, idx) => (
            <SidebarRoute route={route} idx={idx} key={route.path} />
          ))}

      <li
        className={`flex items-center gap-4 w-full h-[48px] cursor-pointer transition rounded-lg pl-2 ${
          mode === "dark" ? "hover:bg-[#303031]" : "hover:bg-[#E4E6E9]"
        }`}
        onClick={() => setIsShowFull(!isShowFull)}
      >
        {!isShowFull ? (
          <>
            <BsChevronDown />
            <span className="text-[15px] font-medium">See more</span>
          </>
        ) : (
          <>
            <BsChevronUp />
            <span className="text-[15px] font-medium">See less</span>
          </>
        )}
      </li>
    </ul>
  );
};

export default Sidebar;
