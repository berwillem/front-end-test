import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", { username, password })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        Swal.fire({
          title: "Good job!",
          text: "user loged succefuly",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSumbit(e)}>
        <label>enter username</label>
        <br />
        <input type="text" onChange={(e) => setusername(e.target.value)} />
        <br />
        <br />
        <br />
        <label>enter password</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
