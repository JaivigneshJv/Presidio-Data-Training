export const getCategories = async () => {
  const response = await fetch("/api/categories");
  const data = await response.json();
  return data;
};

export const createCategory = async (category) => {
  const response = await fetch("/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  const data = await response.json();
  return data;
};
