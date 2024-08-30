import React, {useEffect, useState} from "react";
import {createExpense} from "../api/expenseApi";
import {getCategories as fetchCategories} from "../api/categoryApi";

const ExpenseForm = ({setExpenses}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      let cate = await fetchCategories();
      setCategories(cate);
      console.log(cate);
    };
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = {description, amount, category};
    const createdExpense = await createExpense(newExpense);
    setExpenses((prevExpenses) => [...prevExpenses, createdExpense]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
