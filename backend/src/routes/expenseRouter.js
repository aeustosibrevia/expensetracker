const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

router.get("/", expenseController.getAllExpenses);
router.get("/summary", expenseController.countSummary);
router.get("/summary/:month", expenseController.countMonthSummary);
router.get("/:id", expenseController.getExpenseById);
router.post("/", expenseController.createExpense);
router.patch("/:id", expenseController.updateExpense);
router.delete("/:id", expenseController.removeExpense);

module.exports = router;