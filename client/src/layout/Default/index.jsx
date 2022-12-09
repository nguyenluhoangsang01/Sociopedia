import { Outlet } from "react-router-dom";
import Contacts from "../../components/Contacts";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Default = () => {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-3 pt-[60px]">
        <Sidebar />

        <Outlet />

        <Contacts />
      </div>
    </div>
  );
};

export default Default;
