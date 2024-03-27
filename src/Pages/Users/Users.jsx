import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
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
        <li>{user.username}</li>
      ))}
    </>
  );
};

export default Users;
