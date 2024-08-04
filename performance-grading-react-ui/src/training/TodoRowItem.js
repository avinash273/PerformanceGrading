function TodoRowItem(props) {
    const rowNumber = 0;
    const rowDescription = "Test";
    const rowAssigned = "Test"
    return (
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )

}

export default TodoRowItem;