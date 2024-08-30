const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const categoryRoutes = require("./routes/categoryRoutes");
const {errorHandler} = require("./middleware/errorMiddleware");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/categories", categoryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Category service running on port ${PORT}`));
