import Property from "./Property";
import "./css/PropertyListing.css";

function PropertyListing({ properties }) {
  properties = properties.map((p) => <Property key={p._id} {...p} />);
  return <div className="PropertyListing">{properties}</div>;
}

export default PropertyListing;
