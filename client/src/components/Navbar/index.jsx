import { GoSearch } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { routesCenter, routesRight } from "../../app/routes/navbarRoutes";
import { selectTheme } from "../../state/theme";
import Input from "../Input";

const Navbar = () => {
  const { mode } = useSelector(selectTheme);

  return (
    <div
      className={`flex items-center justify-between px-4 h-[56px] ${
        mode === "dark" ? "bg-[#242526] " : "bg-[#fff] shadow-md"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-full">
          <Link to="/">
            <img src="assets/icons/facebook.svg" alt="Facebook" />
          </Link>
        </div>

        <Input
          type="text"
          name="searchTerm"
          placeholder="Search Sociopedia"
          icon={<GoSearch />}
          className="w-[212px] h-[40px]"
        />
      </div>

      <div>
        <ul className="flex items-center">
          {routesCenter.map((route) => (
            <NavLink
              to={route.path}
              alt={route.alt}
              key={route.alt}
              className={({ isActive }) =>
                isActive ? "border-b-4 border-[#2374E1] transition" : ""
              }
            >
              <li
                className={`w-[120px] h-[56px] mx-auto flex items-center justify-center cursor-pointer transition rounded-lg [&>svg]:text-[28px] ${
                  mode === "light"
                    ? "text-[#65676B] hover:bg-[#F2F2F2]"
                    : "text-[#B0B3B8] hover:bg-[#3A3B3C]"
                }`}
              >
                {route.icon}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex items-center text-white gap-4">
          {routesRight.map((route) =>
            route.path ? (
              <Link
                to={route.path}
                key={route.alt}
                className={`cursor-pointer transition p-2 rounded-full ${
                  mode === "dark"
                    ? "bg-[#3A3B3C] hover:bg-[#4E4F50]"
                    : "bg-[#E4E6EB] hover:bg-[#D8DADF] text-black"
                }`}
              >
                <li className="[&>svg]:text-[24px]">{route.icon}</li>
              </Link>
            ) : (
              <li
                key={route.alt}
                className={`[&>svg]:text-[24px] cursor-pointer transition p-2 rounded-full ${
                  mode === "dark"
                    ? "bg-[#3A3B3C] hover:bg-[#4E4F50]"
                    : "bg-[#E4E6EB] hover:bg-[#D8DADF] text-black"
                }`}
              >
                {route.icon}
              </li>
            )
          )}

          <li>A</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
