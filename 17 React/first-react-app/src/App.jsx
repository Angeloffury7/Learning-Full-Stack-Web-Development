import "./App.css";

import Chicken from "./Chicken";
import Die from "./Die";
import Game from "./Game";
import Greeter from "./Greeter";
import ListPicker from "./ListPicker";

function App() {
  return (
    <div>
      {/* <Chicken /> */}
      {/* <Greeter person="Gurditt" from="Colt"/> */}
      {/* <Greeter person="Binx" from="Elton"/> */}
      {/* <Greeter />
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/> */}
      {/* <ListPicker values={[10,20,30]}/>
      <ListPicker values={["a", "b", "c"]}/>
      <ListPicker values={{a:1, b:2}}/> */}
      <Game />
      <Game />
      <Game />
    </div>
  );
}

export default App;
