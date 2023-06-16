export default function ColorList({colors}) {
    console.log(colors);
    const elements = [<p>This is a paragraph</p>, <h3>This is an h3</h3>, <input type="color"/>]

    colors = colors.map(color => <li style={{color: color}}>{color}</li>);

    return (
        <div>
            <p>ColorList: </p>
            {/* {elements}  */}
            {/* Renders the elements one-by-one */}
            <div></div>
            {/* We need to render each color as an li, so we need to make all of them li's 
                line 5        */}
            <ul>{colors}</ul>
        </div>
    )
}