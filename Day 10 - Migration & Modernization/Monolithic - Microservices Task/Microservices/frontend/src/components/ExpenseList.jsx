import React from "react";

const ExpenseList = ({expenses}) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense._id}>
          {expense.description} - ${expense.amount} - {expense.category}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
