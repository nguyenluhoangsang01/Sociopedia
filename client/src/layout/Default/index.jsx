import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Default = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Default;
