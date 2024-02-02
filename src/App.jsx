import { useState, useEffect } from "react";
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
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const [history, setHistory] = useState(items);

  const [expence, setExpence] = useState(0);

  // const [expence, setExpence] = useState(0);

  // const expencesum = history
  //   .filter((ele) => ele.amount < 0)
  //   .reduce((sum, items) => sum + items.amount, 0);
  // console.log("anee", expencesum);
  // setExpence(expencesum);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    // Calculate initial income
    const initialIncome = items.reduce((sum, item) => {
      return item.amount > 0 ? sum + item.amount : sum;
    }, 0);
    setIncome(initialIncome);

    // Calculate initial expense
    const initialExpense = items.reduce((sum, item) => {
      return item.amount < 0 ? sum + item.amount : sum;
    }, 0);
    setExpence(initialExpense);
  }, []);

  function addNewHistory(newHistory) {
    setHistory((prevHistory) => [...prevHistory, newHistory]);
    if (newHistory.amount > 0) {
      setIncome((prevIncome) => prevIncome + newHistory.amount);
    } else {
      setExpence((prevExpense) => prevExpense + newHistory.amount);
    }
  }

  return (
    <>
      <div className="app">
        <Header />
        <Balance expence={expence} income={income} />
        <History history={history} />
        <Transaction
          onaddnewhistory={addNewHistory}
          text={text}
          amount={amount}
          setText={setText}
          setAmount={setAmount}
          income={income}
        />
      </div>
    </>
  );
}

export default App;
