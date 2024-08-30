import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Expense Tracker</h1>
      <p>Manage your expenses efficiently!</p>
      <button
        onClick={() => {
          window.location.href = "/expenses";
        }}>
        New Expense
      </button>
      <button
        onClick={() => {
          window.location.href = "/categories";
        }}>
        Category
      </button>
    </div>
  );
};

export default Home;
