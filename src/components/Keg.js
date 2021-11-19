import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h2>{props.name}</h2>
        <p>Remaining pints: {props.quantity}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  whenKegClicked: PropTypes.func
};

export default Keg;