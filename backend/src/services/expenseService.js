const expenseRepository = require("../repositories/expenseRepository");
const AppError = require("../utils/AppError");

async function getAllExpenses() {
    return await expenseRepository.findAll();
}

async function getExpenseById(id) {
    const expense = await expenseRepository.findById(id);

    if (!expense) {
        throw new AppError("No expense with this id", 404);
    }

    return expense;
}

async function createExpense(expense) {
    return await expenseRepository.create(expense);
}

async function updateExpense(id, expense) {
    const currentExpense = await expenseRepository.update(id, expense);
    if(!currentExpense) {
        throw new AppError("No expense with this id", 404);
    }
    return currentExpense;
}

async function removeExpense(id) {
    const isExpense = await expenseRepository.remove(id);
    if(!isExpense) {
        throw new AppError("No expense with this id", 404);
    }
    return isExpense;
}

async function countSummary(){
    return await expenseRepository.summary();
}

async function countMonthSummary(month){
    return await expenseRepository.monthSummary(month);
}

module.exports = { getAllExpenses, getExpenseById, createExpense, updateExpense, removeExpense, countSummary, countMonthSummary };