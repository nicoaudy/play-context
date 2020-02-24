import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../components";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      {transactions && (
        <ul id="list" className="list">
          {transactions.map((row, i) => (
            <Transaction transaction={row} key={row.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
