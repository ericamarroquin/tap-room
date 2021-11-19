import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <React.Fragment>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <p>{props.alcohol}</p>
        {/* <p>{props.quantity}</p> */}
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  alcohol: PropTypes.string
}

export default Keg;