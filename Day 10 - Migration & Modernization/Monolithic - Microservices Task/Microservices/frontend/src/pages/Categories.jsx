import React, {useEffect, useState} from "react";
import CategoryForm from "../components/CategoryForm";
import {getCategories} from "../api/categoryApi";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <CategoryForm setCategories={setCategories} />
      <h4
        style={{
          marginTop: "20px",
        }}>
        Existing Categories
      </h4>
      {categories.map((category) => (
        <li key={category._id}>{category.name}</li>
      ))}
    </div>
  );
};

export default Categories;
