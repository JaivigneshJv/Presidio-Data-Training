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
    </div>
  );
};

export default Categories;
