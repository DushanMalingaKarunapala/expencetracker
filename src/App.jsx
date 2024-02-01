import { useState } from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { Transaction } from "./components/Transaction";

const items = [
  {
    name: "cash",
    amount: 500,
  },
  {
    name: "book",
    amount: -40,
  },
  {
    name: "camera",
    amount: -200,
  },
];

function App() {
  const [history, setHistory] = useState(items);
  function addnewhistory(newhistory) {
    setHistory((history) => [...history, newhistory]);
  }

  return (
    <>
      <div className="app">
        <Header />
        <Balance />
        <History history={history} />
        <Transaction onaddnewhistory={addnewhistory} />
      </div>
    </>
  );
}

export default App;
