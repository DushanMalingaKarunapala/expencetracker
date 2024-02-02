export const Balance = ({ expence, income }) => {
  let balance = income + expence;
  return (
    <div className="balance-section">
      <div className="balance-sum">
        <h3>Your Balance</h3>
        <p>{balance < expence ? "You dont have enough balance" : balance}</p>
      </div>
      <div className="bal-box">
        <div>
          <p>Income</p>
          <p style={{ color: "green" }}>${income}</p>
        </div>
        <div>
          <p>Expence</p>
          <p style={{ color: "red" }}>${expence}</p>
        </div>
      </div>
    </div>
  );
};
