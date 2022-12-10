import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTheme } from "../../state/theme";

const options = [
  {
    name: "Live video",
  },
  {
    name: "Photo/Video",
  },
  {
    name: "Feeling/Activity",
  },
];

const CreatePost = () => {
  const { mode } = useSelector(selectTheme);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  return (
    <div
      className={`w-full px-4 py-3 rounded-lg divide-y divide-[#ffffff1a] ${
        mode === "light" ? "bg-[#fff]" : "bg-[#242526]"
      }`}
    >
      <div className="flex items-center gap-2 pb-4">
        <Link className="cursor-pointer" to="/nguyenluhoangsang01">
          <img
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/295865964_785774115910590_4688402722710114299_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TPblBacxZhIAX9gNWWP&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfArAPQC2wBM_jsz4RvkMjnyTrNOhh3XhWnpqK-a9WpVGQ&oe=6398C5BE"
            alt="Nguyễn Lữ Hoàng Sang"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        </Link>

        <div
          className={`cursor-pointer w-full h-[40px] flex items-center rounded-full pl-3 transition ${
            mode === "light"
              ? "bg-[#F0F2F5] hover:bg-[#E4E6E9] text-[#65676B]"
              : "text-[#7D7F82] hover:bg-[#4E4F50] bg-[#3A3B3C]"
          }`}
          onClick={() => setIsOpenCreateModal(!isOpenCreateModal)}
        >
          What's on your mind, Hoàng Sang?
        </div>
      </div>

      <ul className="pt-2 grid grid-cols-3">
        {options.map((option, idx) => (
          <li
            className={`transition cursor-pointer w-full flex items-center justify-center rounded-lg h-[40px] gap-2 ${
              mode === "light" ? "hover:bg-[#F2F2F2]" : "hover:bg-[#3A3B3C]"
            }`}
            key={option.name + idx}
          >
            <div className={`create-post create-post-${idx}`} />
            <span>{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreatePost;
