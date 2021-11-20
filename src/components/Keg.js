import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h2>{props.name}</h2>
        {props.quantity <=0 ? <p>Keg is sold out! Sad face.</p> : <p>Remaining pints: {props.quantity}</p>}
      </div>
      <button onClick = {() => props.whenPintSold(props.id)}>Sell Pint!</button>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  whenKegClicked: PropTypes.func,
  id: PropTypes.string,
  whenPintSold: PropTypes.func
};

export default Keg;