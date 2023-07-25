import React, { useState } from "react";

const Expense = () => {
  const [expense, setExpense] = useState("");
  const [expenseData, setExpenseData] = useState([]);

  const handleExpense = (e) => {
    e.preventDefault();
    if (expense.trim() !== "") {
      expenseData.push(expense);

      setExpenseData([...expenseData]);
      setExpense("");
    }
  };

  console.log(expense);

  return (
    <>
      <div>
        <h1>Enter your Expense</h1>
        <form onSubmit={handleExpense}>
          <input
            type="text"
            value={expense}
            placeholder="enter expense here"
            onChange={(e) => setExpense(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <ul>
            {expenseData !== 0 ? (
              expenseData.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <p>No Data</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Expense;
