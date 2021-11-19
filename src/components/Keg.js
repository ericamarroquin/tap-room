import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <React.Fragment>
      <div>
        <h2>{props.name}</h2>
        <p>{props.quantity}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number
}

export default Keg;