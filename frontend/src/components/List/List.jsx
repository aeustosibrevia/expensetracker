import ListRow from "./ListRow.jsx";

const List = () => {
    return (
        <table className="expenses-table">
            <caption>Expenses List</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <ListRow id="1" date="01.08.2006" description="Coffee" amount="$67.67"/>
            </tbody>
        </table>
    )
}

export default List;