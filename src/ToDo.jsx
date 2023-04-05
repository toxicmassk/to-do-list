import React from "react";

const style = {};

const ToDo = ({ todo }) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.p}>{todo}</p>
      </div>
    </li>
  );
};

export default ToDo;
