import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./ToDo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-b from-green-200 to-green-300`,
};

function App() {
  const [todos, setTodos] = useState(["Learn React", "Learn Typescript"]);
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-Do List </h3>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Add To-Do"
          ></input>
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <ToDo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
