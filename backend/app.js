const express = require("express");
const expenseRoutes = require("./src/routes/expenseRouter");
const errorMiddleware = require("./src/middlewares/errorMiddleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Test");
});

app.use("/api/expenses", expenseRoutes);

app.use(errorMiddleware);

module.exports = app;