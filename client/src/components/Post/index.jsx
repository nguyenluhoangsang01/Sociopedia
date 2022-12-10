import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../state/theme";

const Post = () => {
  const { mode } = useSelector(selectTheme);

  return (
    <div
      className={`w-full px-4 py-3 rounded-lg ${
        mode === "light" ? "bg-[#fff]" : "bg-[#242526]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>avatar</div>
        <div>options</div>
      </div>

      <p>description</p>

      <div>
        <img
          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/319341360_1031465527753591_3317803929414891691_n.png?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=vnElwlqpQroAX9arl1P&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfARoRpKqTTr7oFxmyIfcNn_okb-a_HcM-TRNi0CTFwIqQ&oe=639A8D8A"
          alt=""
        />
      </div>

      <div>
        <span>icon</span>
        <span>1k</span>
      </div>

      <div className="flex items-center justify-between">
        <div>like button</div>
        <div>comment button</div>
      </div>
    </div>
  );
};

export default Post;
