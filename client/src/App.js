import Auth from "layout/Auth";
import Default from "layout/Default";
import { Route, Routes } from "react-router-dom";
import Home from "views/Home";
import Login from "views/Login";
import NotFound from "views/NotFound";
import PostDetail from "views/PostDetail";
import Profile from "views/Profile";
import Register from "views/Register";

function App() {
  return (
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
  );
}

export default App;
