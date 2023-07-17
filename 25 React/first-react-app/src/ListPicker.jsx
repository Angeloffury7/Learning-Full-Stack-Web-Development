export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randEl = values[randIdx];
    return (
        <div>
            <p>The list of values {values}</p>
            <p>Random element is {randEl}</p>
        </div>
    )
}