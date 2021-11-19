import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail: {keg.name}</h1>
      <h3>{keg.brand}</h3>
      <p>{keg.alcohol}</p>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;