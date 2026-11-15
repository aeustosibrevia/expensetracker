import Form from "./Form/Form.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Summary from "./Summary/Summary.jsx";
import List from "./List/List.jsx";

const Expenses = () => {
    return (
        <div className="app-shell">
            <Sidebar />

            <main className="main-content">
                <header className="page-header">
                    <div>
                        <p className="page-eyebrow">PERSONAL FINANCE</p>
                        <h1>Your expenses</h1>
                    </div>
                </header>

                <section className="summary-grid">
                    <Summary />
                </section>

                <section className="dashboard-content">
                    <div className="form-card">
                        <div className="section-heading">
                            <h2>Add expense</h2>
                            <p>Record your new expense</p>
                        </div>
                        <Form />
                    </div>

                    <div className="list-card">
                        <List />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Expenses;