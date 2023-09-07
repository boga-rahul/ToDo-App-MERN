import { useEffect, useState } from "react";
import Item from "../model/Item";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function HomePage() {
  const [todoitems, setTodoitems] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const result = await fetch("http://localhost:5000/todo");
      const item = await result.json();
      console.log(item);

      setTodoitems(item);
    })();
  }, []);

  return (
    <>
      <Header />
      <Main todoitems={todoitems} />
      <Footer />
    </>
  );
}
