const ListCell = (props) => {
    const { children } = props;

    return (
        <td className="list-cell">{children}</td>
    )
}

export default ListCell;