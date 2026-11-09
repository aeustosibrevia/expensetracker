const app = require("./app");
const pool = require("./src/config/db");

const port = process.env.PORT || 3000;

async function startServer() {
    try {
        const connection = await pool.getConnection();
        console.log("MySQL connected successfully.");
        connection.release();

        app.listen(port, () => {
            console.log("App listening on port", port);
        })
    } catch (err) {
        console.error("MySQL connection error: " + err.message);
        process.exit(1);
    }
}

startServer();
