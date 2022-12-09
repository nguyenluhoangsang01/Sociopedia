import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./layout/Auth";
import Default from "./layout/Default";
import { selectTheme } from "./state/theme";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import PostDetail from "./views/PostDetail";
import Profile from "./views/Profile";
import Register from "./views/Register";

function App() {
  const { mode } = useSelector(selectTheme);

  return (
    <div
      className={
        mode === "dark"
          ? "bg-[#18191A] text-[#E4E6EB]"
          : "bg-[#F0F2F5] text-[#050505]"
      }
    >
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
