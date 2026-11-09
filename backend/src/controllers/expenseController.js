const expenseService = require('../services/expenseService');
const { validateCreateExpense, validateUpdateExpense } = require('../validators/expenseValidator');

async function getAllExpenses(req, res) {
    const expenses = await expenseService.getAllExpenses();
    res.status(200).json(expenses);
}

async function getExpenseById(req, res) {
    const expenseId = req.params.id;
    const expense = await expenseService.getExpenseById(expenseId);
    res.status(200).json(expense);
}

async function createExpense(req, res) {
    const validation = await validateCreateExpense(req.body);
    if (!validation.valid) {
        return res.status(400).json({ error: validation.message });
    }
    const expense = await expenseService.createExpense(validation.value);
    res.status(200).json(expense);
}

async function updateExpense(req, res) {
    const validation = await validateUpdateExpense(req.body);
    if (!validation.valid) {
        return res.status(400).json({ error: validation.message });
    }
    const expense = await expenseService.updateExpense(req.params.id, validation.value);
    res.status(200).json(expense);
}

async function removeExpense(req, res) {
    const expenseId = req.params.id;
    const isDeleted = await expenseService.removeExpense(expenseId);
    if (!isDeleted) {
        return res.status(400).json({ error: "Expense not deleted" });
    }
    res.status(200).json({ message: "Expense deleted successfully." });
}

module.exports = { getAllExpenses, getExpenseById, createExpense, updateExpense, removeExpense };