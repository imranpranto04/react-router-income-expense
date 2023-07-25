import React, { useState } from "react";

const Income = () => {
  const [income, setIncome] = useState("");
  const [incomeData, setIncomeData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (income.trim() !== "") {
      incomeData.push(income);

      setIncomeData([...incomeData]);
      setIncome("");
    }
  };

  console.log(incomeData);

  return (
    <>
      <div>
        <h1>Enter Your Income:</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={income}
            placeholder="enter income here"
            onChange={(e) => setIncome(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <div>
          <ul>
            {incomeData !== 0 ? (
              incomeData.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <p>No Data</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Income;
