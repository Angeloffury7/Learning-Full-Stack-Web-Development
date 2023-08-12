import Child from "./Child";

function Parent({ path, updatePath }) {
    return (
        <div
            onClick={() => {
                path.push("parent");
                updatePath(path);
            }}
        >
            <div>Parent</div>
            <Child updatePath={updatePath} path={path} />
        </div>
    );
}

export default Parent;
