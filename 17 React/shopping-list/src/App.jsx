import "./App.css";
import ShoppingList from "./components/ShoppingList";

//Imagine this is coming from a database

const data = [
  {_id: 1, name: "eggs", quantity: 12, completed: false},
  {_id: 2, name: "milk", quantity: 1, completed: true},
  {_id: 3, name: "chicken breasts", quantity: 4, completed: false},
  {_id: 4, name: "carrots", quantity: 6, completed: true},
]

function App() {
  return (
    <div>
      {/* <ShoppingList items={data} /> */}
      
    </div>
  );
}

export default App;
