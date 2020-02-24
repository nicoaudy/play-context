import React from "react";
import {
  Header,
  Balance,
  Income,
  TransactionList,
  AddTransaction
} from "./components";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
