const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");
const {errorHandler} = require("./middleware/errorMiddleware");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/expenses", expenseRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Expense service running on port ${PORT}`));
