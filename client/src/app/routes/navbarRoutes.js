import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { HiBuildingStorefront, HiUserGroup } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { TbGridDots } from "react-icons/tb";

export const routesCenter = [
  {
    path: "/",
    icon: <AiFillHome />,
    alt: "Home",
  },
  {
    path: "/watch",
    icon: <MdOndemandVideo />,
    alt: "Watch",
  },
  {
    path: "/marketplace",
    icon: <HiBuildingStorefront />,
    alt: "Marketplace",
  },
  {
    path: "/groups",
    icon: <HiUserGroup />,
    alt: "Groups",
  },
  {
    path: "/gaming",
    icon: <SiFacebookgaming />,
    alt: "Gaming",
  },
];

export const routesRight = [
  {
    path: null,
    icon: <TbGridDots />,
    alt: "Menu",
  },
  {
    path: null,
    icon: <AiFillMessage />,
    alt: "Messenger",
  },
  {
    path: "notifications",
    icon: <IoNotifications />,
    alt: "Notifications",
  },
];
