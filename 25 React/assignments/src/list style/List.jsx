function List({items, style}) {
    switch(style) {
        case "numbered":
            style = "upper-roman";
            break;
        case "alpha":
            style = "lower-alpha";
            break;
        default:
            style = "disc"
    }

    return (
        <ul style={{listStyleType: style}}>
            {items.map(it => <li>{it}</li>)}
        </ul>
    );
}

export default List;