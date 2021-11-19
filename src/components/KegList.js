import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) => 
      <Keg 
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcContent={keg.alcContent}
        key={keg.id} />
        )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;