import List from "./List";

function ListStyle() {

    const items = ["mongodb", "express.js", "react.js", "node.js"]
    const styles = ["numbered", "alpha", "bullet"];

    return (
        <div>
            {styles.map((s) => (
                <List key={Math.random()} items={items} style={s} />
            ))}
        </div>
    );
}

export default ListStyle;