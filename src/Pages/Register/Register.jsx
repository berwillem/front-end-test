import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users", { username, password, age })
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "user registred succefuly",
          icon: "success",
        });
        navigate("/login");
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
    <>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          placeholder="unter your username"
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="unter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="unter your age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
