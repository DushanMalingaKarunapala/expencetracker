export const History = ({ history }) => {
  return (
    <div className="history-section">
      <div className="history-header">
        <h3>History</h3>
        <hr />
      </div>
      <div className="history-transactions-list">
        <ul style={{ padding: "0 5px" }}>
          {history.map((item) => (
            <li key={item.name}>
              {item.name} {item.amount}
            </li>
          ))}

          {/* <li>Book</li>
          <li>Camera</li> */}
        </ul>
      </div>
    </div>
  );
};
