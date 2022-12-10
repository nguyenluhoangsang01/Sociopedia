import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdVideoCall } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectTheme } from "../../state/theme";

const contactOptions = [
  {
    icon: <MdVideoCall />,
    title: "New call",
  },
  {
    icon: <GoSearch />,
    title: "Search by name or group",
  },
  {
    icon: <BsThreeDots />,
    title: "Options",
  },
];

const Contacts = () => {
  const { mode } = useSelector(selectTheme);

  return (
    <div className="pr-4 pt-4 min-w-[320px]">
      <div
        className={`flex items-center justify-between ${
          mode === "light" ? "text-[#65676B]" : "text-[#B0B3B8]"
        }`}
      >
        <h5 className="font-medium">Contacts</h5>
        <div className="flex items-center gap-4">
          {contactOptions.map((option, idx) => (
            <div
              key={option.icon + idx}
              className={`text-xl cursor-pointer  w-[36px] h-[36px] flex items-center justify-center rounded-full transition ${
                mode === "light" ? "hover:bg-[#E4E6E9]" : "hover:bg-[#303031]"
              }`}
              title={option.title}
            >
              {option.icon}
            </div>
          ))}
        </div>
      </div>

      <ul className="max-h-screen overflow-scroll scrollbar-hide">
        <li
          className={`pl-2 flex items-center gap-3 transition h-12 rounded-lg cursor-pointer ${
            mode === "light" ? "hover:bg-[#E4E6E9]" : "hover:bg-[#303031]"
          }`}
        >
          <div>
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/295865964_785774115910590_4688402722710114299_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TPblBacxZhIAX9gNWWP&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfArAPQC2wBM_jsz4RvkMjnyTrNOhh3XhWnpqK-a9WpVGQ&oe=6398C5BE"
              alt="Nguyễn Lữ Hoàng Sang"
              className="w-[36px] h-[36px] rounded-full object-cover"
            />
          </div>
          <span>Nguyễn Lữ Hoàng Sang</span>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
