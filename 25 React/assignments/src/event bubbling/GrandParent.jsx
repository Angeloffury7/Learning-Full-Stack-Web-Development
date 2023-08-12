import { useState } from "react";
import Parent from "./Parent";

function GrandParent() {
    // const levels = [];

    const [path, setPath] = useState([]);

    function updatePath(newPath) {
        setPath([...newPath]);
    }

    return (
        <div onClick={() => {
            path.push("grandparent");
            updatePath(path.reverse());
        }}
        onDoubleClick={() => window.close()}>

            <h1>The path is {path.join(" -> ")}</h1>
            <div>GrandParent</div>
            <Parent updatePath={updatePath} path={path}/>
        </div>
    );
}

export default GrandParent;
