import ListCell from "./ListCell.jsx";

const ListRow = (props) => {
    const {id, date, description, amount} = props;
    return (
        <tr className="list-row" id={id}>
            <ListCell>{date}</ListCell>
            <ListCell>{description}</ListCell>
            <ListCell>{amount}</ListCell>
        </tr>
    )
}

export default ListRow;
