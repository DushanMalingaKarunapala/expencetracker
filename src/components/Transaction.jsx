import { useState } from "react";

export const Transaction = ({ onaddnewhistory }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handlesumbit(e) {
    e.preventDefault();

    if (!text || !amount) return;

    const newhistory = {
      name: text,
      amount: amount,
    };

    onaddnewhistory(newhistory);

    setText("");
    setAmount(0);
  }

  return (
    <>
      <form className="transaction" onSubmit={handlesumbit}>
        <div className="transaction-header">
          <h3>Add new transaction</h3>
          <hr />
        </div>
        <div className="item-name">
          <p>Text</p>
          <input
            value={text}
            type="text"
            placeholder="Enter text"
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="item-amount">
          <p>Amount</p>
          <p style={{ marginRight: "150px" }}>
            negative- expense, positive- income
          </p>
          <input
            value={amount}
            type="number"
            placeholder="Enter amount"
            onChange={(e) => setAmount(Number(e.target.value))}
          ></input>
        </div>
        <button className="add-trans-btn">Add transaction</button>
      </form>
    </>
  );
};
