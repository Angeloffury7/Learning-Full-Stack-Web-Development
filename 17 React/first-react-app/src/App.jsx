import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";

function App() {
  return (
    <div>
      <Chicken />
      <Greeter person="Gurditt"/>
      <Greeter person="Binx"/>
    </div>
  );
}

export default App;
