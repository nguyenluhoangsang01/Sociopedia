import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <div>
      <p>Default</p>
      <Outlet />
    </div>
  );
};

export default Default;
