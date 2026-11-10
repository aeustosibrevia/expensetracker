const pool = require("../config/db");


async function findAll() {
    const [rows] = await pool.execute(
        "SELECT * FROM expenses ORDER BY id DESC"
    );
    return rows;
}

async function findById(id) {
    const [rows] = await pool.execute(
        "SELECT * FROM expenses WHERE id = ?",
        [id],
    );
    return rows[0] ?? null;
}

async function create(expense) {
    const [result] = await pool.execute(
        "INSERT INTO expenses (description, amount) VALUES (?,?)",
        [expense.description, expense.amount],
    );
    return {id: result.insertId, ...expense};
}

async function update(id, data) {
    await pool.execute(
        "UPDATE expenses SET description = COALESCE(?, description), amount = COALESCE(?, amount) WHERE id = ?",
        [data.description ?? null,
        data.amount ?? null,
        id],
    );

    return findById(id);
}

async function remove(id) {
    const [result] = await pool.execute(
        "DELETE FROM expenses WHERE id = ?",
        [id],
    );

    return result.affectedRows > 0;
}

async function summary(){
    const [result] = await pool.execute(
        "SELECT SUM(amount) FROM expenses",
    );
    return result;
}

async function monthSummary(month){
    const year = new Date().getFullYear();

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const [result] = await pool.execute(
        "SELECT SUM(amount) AS summary FROM expenses WHERE created_at >= ? AND created_at < ?;",
        [startDate, endDate],
    );
    return result[0].summary ?? 0;
}

module.exports = { findAll, findById, create, update, remove, summary, monthSummary };