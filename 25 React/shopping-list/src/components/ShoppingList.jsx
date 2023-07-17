import ListItem from "./ListItem";

function ShoppingList({ items }) {
  items = items.map((i) => (
    <ListItem
      key={i._id}
      name={i.name}
      quantity={i.quantity}
      completed={i.completed}

      // {...i} //spread operator! an alternative
    />
  ));

  return <ul>{items}</ul>;
}

export default ShoppingList;