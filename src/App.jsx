import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./ToDo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-b from-gray-100 to-gray-400`,
  container: `bg-gradient-to-r from-green-600 to-green-900 max-w-[500px] w-auto m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
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
        <p className="{style.count}">You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
