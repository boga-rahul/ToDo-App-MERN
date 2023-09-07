import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header>
      <h2>To Do</h2>
      <Link to={"/createTodo"}>
        <MdOutlineAdd />
      </Link>
    </header>
  );
}
