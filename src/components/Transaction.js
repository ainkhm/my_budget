import React from "react";

export const Transaction = ({ item }) => {
  const sign = item.amount < 0 ? "-" : "+";
  return (
    <li className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}
      <span>
        {sign} ${Math.abs(item.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
