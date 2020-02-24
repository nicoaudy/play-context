import React from "react";
import {
  Header,
  Balance,
  Income,
  TransactionList,
  AddTransaction
} from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
