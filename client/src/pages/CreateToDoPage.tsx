import { useState } from "react";
import "../styles/CreateToDoPage.scss";
import Item from "../model/Item";
import { useNavigate } from "react-router-dom";
export default function CreateToDoPage() {
  const [item, setItem] = useState<Item>({});

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(item);

    const result = await fetch("http://localhost:5000/todo", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await result.json();
    console.log(response);

    navigate("/");
  };

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor={"title"}>Title</label>
        <input
          id="title"
          type="text"
          placeholder="enter title"
          value={item?.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="Description"
          placeholder="enter description"
          value={item?.body}
          onChange={(e) => setItem({ ...item, body: e.target.value })}
        />
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            Cancel
          </button>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}
