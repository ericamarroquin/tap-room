import React from "react";

function Keg(props) {
  return(
    <React.Fragment>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <p>{props.alcContent}</p>
        <p>{props.quantity}</p>
      </div>
    </React.Fragment>
  );
}

export default Keg;