const Expense = require('../models/Expense');

// @desc Get all expenses
// @route GET /api/expenses
// @access Public
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res.json(expenses);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// @desc Create a new expense
// @route POST /api/expenses
// @access Public
const createExpense = async (req, res) => {
  try {
    const {description, amount, category} = req.body;
    const expense = new Expense({
      description,
      amount,
      category,
    });
    const createdExpense = await expense.save();
    res.status(201).json(createdExpense);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {getExpenses, createExpense};
