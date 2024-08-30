const API_URL = import.meta.env.VITE_API_URL1;

export const getExpenses = async () => {
  const response = await fetch(`${API_URL}/api/expenses`);
  const data = await response.json();
  return data;
};

export const createExpense = async (expense) => {
  const response = await fetch(`${API_URL}/api/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  const data = await response.json();
  return data;
};
