import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Default;
