import { useState } from "react";
import "../styles/ToDoItem.scss";
import Item from "../model/Item";

export default function ToDoItem(todoitem: Item) {
  // console.log(todoitem);
  const [isChecked, setIsChecked] = useState(todoitem.isCompleted);
  const checkHandler = async () => {
    const result = await fetch("http://localhost:5000/todo", {
      method: "PATCH",
      body: JSON.stringify({
        ...todoitem,
        isCompleted: !isChecked,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await result.json();
    console.log(response);
    setIsChecked(!isChecked);
  };

  return (
    <ul>
      <li>
        <span>
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={checkHandler}
          />
        </span>
        <div>
          <p>{todoitem.title}</p>
          <p>{todoitem.body}</p>
        </div>
      </li>
    </ul>
  );
}
