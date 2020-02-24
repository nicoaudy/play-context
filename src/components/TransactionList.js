import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const context = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      {context.transactions && (
        <ul id="list" className="list">
          {context.transactions.map((row, i) => {
            return (
              <li className="minus" key={i}>
                {row.text} <span>{row.amount}</span>
                <button className="delete-btn">x</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
