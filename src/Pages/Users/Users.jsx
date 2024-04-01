import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {users.map((user) => (
        <Link to={`/user/${user._id}`}>
          <li>{user.username}</li>
        </Link>
      ))}
    </>
  );
};

export default Users;
