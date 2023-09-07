import { FaUser } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/ProfilePage.scss";

export default function ProfilePage() {
  return (
    <>
      <Link to={"/home"}>
        <IoMdArrowRoundBack />
      </Link>
      <div className="content">
        <div>
          <FaUser className="icon" />
          <h2>Ricky</h2>
        </div>

        <a href="#">Signout</a>
      </div>
    </>
  );
}
