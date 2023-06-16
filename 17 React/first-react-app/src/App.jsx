import "./App.css";

import Chicken from "./Chicken";
import Die from "./Die";
import Game from "./Game";
import Greeter from "./Greeter";
import ListPicker from "./ListPicker";
import Heading from "./Heading";
import ColorList from "./ColorList";

function App() {
  return (
    <div>
      <Heading color="magenta" text="Welcome!" fontSize="55px" />
      <Heading
        color="green"
        text="This is my first React project!"
        fontSize="48px"
      />
      {/* <Chicken />
      <Greeter person="Gurditt" from="Colt" />
      <Greeter person="Binx" from="Elton" />
      <Greeter />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />
      <ListPicker values={[10, 20, 30]} />
      <ListPicker values={["a", "b", "c"]} /> */}
      {/*<ListPicker values={{a:1, b:2}}/> */}

      {/* <Game />
      <Game />
      <Game /> */}
      <ColorList
        colors={[
          "red",
          "pink",
          "purple",
          "teal",
          "olive",
          "orangered",
          "blue",
          "slategrey",
        ]}
      />
    </div>
  );
}

export default App;
