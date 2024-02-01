import { useState } from "react";

export const Balance = () => {
  const [balance, setBalance] = useState(200);
  return (
    <div className="balance-section">
      <div className="balance-sum">
        <h3>Your Balance</h3>
        <p>${balance}</p>
      </div>
      <div className="bal-box">
        <div>
          <p>Income</p>
          <p style={{ color: "green" }}>$500.00</p>
        </div>
        <div>
          <p>Expence</p>
          <p style={{ color: "red" }}>$240.00</p>
        </div>
      </div>
    </div>
  );
};
