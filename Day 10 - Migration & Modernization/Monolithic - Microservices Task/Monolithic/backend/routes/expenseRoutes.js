const express = require("express");
const {
  getExpenses,
  createExpense,
} = require("../controllers/expenseController");
const router = express.Router();

router.route("/").get(getExpenses).post(createExpense);

module.exports = router;
