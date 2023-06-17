import "./App.css";
import ShoppingList from "./components/ShoppingList";
import PropertyListing from "./components/PropertyListing";
import Clicker from "./components/Clicker";
import Form from "./components/Form";

//Imagine this is coming from a database

const data = [
  { _id: 1, name: "eggs", quantity: 12, completed: false },
  { _id: 2, name: "milk", quantity: 1, completed: true },
  { _id: 3, name: "chicken breasts", quantity: 4, completed: false },
  { _id: 4, name: "carrots", quantity: 6, completed: true },
];

const vacationData = [
  { _id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { _id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { _id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { _id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { _id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { _id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      {/* <ShoppingList items={data} /> */}
      {/* <PropertyListing properties={vacationData}/> */}
      {/* <Form /> */}
      <Clicker msg="HI!!!" btnText="Please click me ^_^"/>
      <Clicker msg="STOP CLICKING ME >:(" btnText="Please don't click me 💀"/>
    </div>
  );
}

export default App;
