import { FaRegListAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <nav>
        <Link to={"/home"}>
          <FaRegListAlt className="icon" />
        </Link>
        <Link to={"/profile"}>
          <FaUser className="icon" />
        </Link>
      </nav>
    </footer>
  );
}
