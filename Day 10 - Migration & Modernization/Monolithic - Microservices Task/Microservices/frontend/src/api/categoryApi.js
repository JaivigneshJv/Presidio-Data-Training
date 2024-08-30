const API_URL = import.meta.env.VITE_API_URL;

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/api/categories`);
  const data = await response.json();
  return data;
};

export const createCategory = async (category) => {
  const response = await fetch(`${API_URL}/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  const data = await response.json();
  return data;
};
