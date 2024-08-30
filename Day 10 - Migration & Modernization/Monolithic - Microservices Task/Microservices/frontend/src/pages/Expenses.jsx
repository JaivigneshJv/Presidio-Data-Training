import React, {useEffect, useState} from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import {getExpenses} from "../api/expenseApi";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Expenses</h1>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Expenses;
