import List from "./List";
import "./App.css";
import data from "./data";
import { useState } from "react";

function App() {

    const [people, setPeople] = useState(data);

    function clearAll() {
      setPeople([]);
    }

    function restoreAll() {
      setPeople(data);
    }

    return (
        <div>
            <h1>Famous Birthdays!</h1>
            <List people={people} clearAll={clearAll} restoreAll={restoreAll}/>
        </div>
    );
}

export default App;
