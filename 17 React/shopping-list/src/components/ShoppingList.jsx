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

/*
    "Missing "key" prop for element in iterator"
    Basically, we need to add a unique identifier for each element so that React can track it.
    If we fetch data from db, we will have an _id field, for now, add your own key
    You can even use the name as the key, use a library for a unique id etc.
 */
