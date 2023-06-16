function ListItem({ _id, name, quantity, completed }) {
  const styles = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <li style={styles}>
      {name} - {quantity}
    </li>
  );
}

export default ListItem;
