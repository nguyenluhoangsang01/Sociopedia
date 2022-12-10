import { Outlet } from "react-router-dom";
import Contacts from "../../components/Contacts";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Default = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-[60px] flex justify-between">
        <Sidebar />

        <div className="min-w-[800px] px-12 overflow-scroll max-h-screen scrollbar-hide">
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
          <Outlet />
        </div>

        <Contacts />
      </div>
    </div>
  );
};

export default Default;
