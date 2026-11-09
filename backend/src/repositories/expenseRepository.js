const expenses = require("../data/data");

async function findAll() {
    return structuredClone(expenses);
}

async function findById(id) {
    const current = expenses.find(expense => expense.id === id);
    return structuredClone(current) ?? null;
}

async function create(expense) {
    const newExpense = {
        ...expense,
        id: crypto.randomUUID(),
    };

    expenses.push(newExpense);
    return structuredClone(newExpense);
}

async function update(id, data) {
    const currentExpense = await findById(id);

    if (!currentExpense) {
        return false;
    }

    const updatedExpense = {
        ...currentExpense,
        ...data,
        id: currentExpense.id,
    };

    const index = expenses.findIndex(expense => expense.id === id);

    expenses.splice(index, 1, updatedExpense);
    return structuredClone(updatedExpense);
}

async function remove(id) {
    const index = expenses.findIndex(expense => expense.id === id);

    if (index !== -1) {
        expenses.splice(index, 1);
        return true;
    }

    return false;
}

module.exports = { findAll, findById, create, update, remove };