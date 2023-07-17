function Property({name, price, rating}) {
    return (
        <div className="Property">
            <h2>{name}</h2>
            <h3>${price} per night</h3>
            <h4>{rating}⭐</h4>
        </div>
    );
}

export default Property;

/*props validation error -> react/prop-types allows us to define types for our props.
    But nobody uses it because of TypeScript
    Easy fix - turn that off
        go to eslintrc.cjs, under rules section add
        "react/prop-types": "off"
        Sometimes it doesn't work, so open command palette and restart ESLint
    
    Other fix - give explicit prop-types
                import PropTypes from "prop-types"

                ShoppingList.PropTypes = {
                    item: PropTypes.string,
                    quantity: PropTypes.number,
                    completed: PropTypes.bool
                }
*/