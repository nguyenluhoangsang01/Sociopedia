import { useSelector } from "react-redux";
import { selectTheme } from "state/theme";

const Input = ({
  type,
  name,
  size,
  placeholder,
  value,
  className,
  icon,
  onChange,
  onBlur,
}) => {
  const { mode } = useSelector(selectTheme);

  const classNameForInput = `w-full bg-transparent outline-none border-none p-2 placeholder:text-[#7D7F82] text-[15px] ${
    mode === "light" ? "text-[#707276]" : "text-[#ADB1B6]"
  }`;

  return (
    <div
      className={`w-full flex items-center rounded-full px-2 ${
        mode === "light" ? "bg-[#F0F2F5]" : "bg-[#3A3B3C]"
      }`}
    >
      {icon && (
        <span
          className={`text-base ${
            mode === "light" ? "text-[#707276]" : "text-[#ADB1B6]"
          }`}
        >
          {icon}
        </span>
      )}
      <input
        type={type}
        name={name}
        size={size}
        value={value}
        placeholder={placeholder}
        className={
          className ? className + " " + classNameForInput : classNameForInput
        }
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
