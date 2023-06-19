import ColorBox from "./ColorBox";
import "./css/ColorBoxesGrid.css"

function ColorBoxesGrid({colors}) {
    const boxes = [];
    for(let i = 0; i<25; i++) {
        boxes.push(<ColorBox colors={colors} />)
    }
    
    return (
        <div className="ColorBoxesGrid">
            {boxes}
        </div>
    );
}

export default ColorBoxesGrid;