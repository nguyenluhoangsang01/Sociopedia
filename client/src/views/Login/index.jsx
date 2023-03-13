import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState(null);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/api/auth/login", form);

    setToken(res.data.data.refreshToken);

    console.log(res);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/api/auth/logout");
    axios.defaults.headers.common["Authorization"] = "";

    console.log(res);
  };

  return (
    <form>
      <input
        placeholder="email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />
      <input
        placeholder="password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />
      <button onClick={handleLogin}>Submit</button>
      <button onClick={handleLogout}>Log out</button>
    </form>
  );
};

export default Login;
