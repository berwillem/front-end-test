import notfound from "../../assets/images/notfound.svg";
import "./Notfound.css";
const Notfound = () => {
  return (
    <>
      <div className="notfoundimg">
        <img src={notfound} alt="notfoundimage" />
      </div>
    </>
  );
};

export default Notfound;
