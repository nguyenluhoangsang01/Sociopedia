import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTheme } from "../../state/theme";

const Post = () => {
  const { mode } = useSelector(selectTheme);

  return (
    <div
      className={`w-full py-3 rounded-lg ${
        mode === "light" ? "bg-[#fff]" : "bg-[#242526]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 px-4">
          <Link className="cursor-pointer" to="/nguyenluhoangsang01">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/295865964_785774115910590_4688402722710114299_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=TPblBacxZhIAX9gNWWP&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfArAPQC2wBM_jsz4RvkMjnyTrNOhh3XhWnpqK-a9WpVGQ&oe=6398C5BE"
              alt="Nguyễn Lữ Hoàng Sang"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
          </Link>
          <div className="flex flex-col">
            <Link className="cursor-pointer" to="/nguyenluhoangsang01">
              <span className="text-sm text-[#E4E6Eb] font-medium">
                Cao thủ
              </span>
            </Link>
            <span className="text-xs text-[#B0B3B8] cursor-pointer hover:underline transition w-fit">
              46m
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#A2A5A9] text-2xl">
          <button
            className={`cursor-pointer w-[36px] h-[36px] flex items-center justify-center rounded-full transition ${
              mode === "light" ? "hover:bg-[#E4E6E9]" : "hover:bg-[#303031]"
            }`}
          >
            <BsThreeDots />
          </button>

          <button
            className={`cursor-pointer  w-[36px] h-[36px] flex items-center justify-center rounded-full transition ${
              mode === "light" ? "hover:bg-[#E4E6E9]" : "hover:bg-[#303031]"
            }`}
          >
            <IoClose />
          </button>
        </div>
      </div>

      <p className="pt-1 pb-4 px-4 text-[#E4E6Eb] text-sm">description</p>

      <div>
        <img
          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/319341360_1031465527753591_3317803929414891691_n.png?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=vnElwlqpQroAX9arl1P&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfARoRpKqTTr7oFxmyIfcNn_okb-a_HcM-TRNi0CTFwIqQ&oe=639A8D8A"
          alt=""
        />
      </div>

      <div className="divide-y px-4 divide-[#ffffff1a]">
        <div className="px-4 flex items-center gap-2 py-[10px]">
          <div className="w-5 h-5">
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              alt="icon"
            />
          </div>
          <span>1k</span>
        </div>

        <div className="px-4 h-11 grid grid-cols-2 place-content-center place-items-center text-[#B0B3B8]">
          <div
            className={`transition cursor-pointer w-full flex items-center justify-center rounded-lg h-[40px] gap-2 ${
              mode === "light" ? "hover:bg-[#F2F2F2]" : "hover:bg-[#3A3B3C]"
            }`}
          >
            <div className="like-post" />
            <span>Like</span>
          </div>
          <div
            className={`transition cursor-pointer w-full flex items-center justify-center rounded-lg h-[40px] gap-2 ${
              mode === "light" ? "hover:bg-[#F2F2F2]" : "hover:bg-[#3A3B3C]"
            }`}
          >
            <div className="comment-post" />
            <span>Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
