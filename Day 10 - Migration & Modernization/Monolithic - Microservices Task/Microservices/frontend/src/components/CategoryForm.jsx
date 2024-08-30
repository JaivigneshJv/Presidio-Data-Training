import React, {useState} from "react";
import {createCategory} from "../api/categoryApi";

const CategoryForm = ({setCategories}) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategory = {name};
    const createdCategory = await createCategory(newCategory);
    setCategories((prevCategories) => [...prevCategories, createdCategory]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
