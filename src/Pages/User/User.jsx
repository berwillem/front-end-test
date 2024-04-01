import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../../Components/DeleteButton/DeleteButton";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const handledeleteuser = () => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(user.todo.text);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <h1>{user.username}</h1>
      <h2>{user.age}</h2>
      <h3>{user?.todo?.text}</h3>
      <DeleteButton handledelete={handledeleteuser}></DeleteButton>
    </>
  );
};

export default User;
