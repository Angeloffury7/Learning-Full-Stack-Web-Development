export default function Heading({color = "olive", text, fontSize}) {
    return (
        <h1 style={{color: color, fontSize: fontSize}}>{text}</h1>
    )
}