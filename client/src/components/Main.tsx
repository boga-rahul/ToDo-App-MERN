import Item from "../model/Item";
import ToDoItem from "./ToDoItem";

export default function Main({ todoitems }) {
  return (
    <main>
      {todoitems.map((item: Item) => {
        return <ToDoItem key={"" + item._id} {...item} />;
      })}
    </main>
  );
}
