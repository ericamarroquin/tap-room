import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail: {keg.name}</h1>
      <h3>Keg Brand: {keg.brand}</h3>
      <p>Alcohol Content: {keg.alcohol}</p>
      <p>Pints Remaining: {keg.quantity}</p>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;