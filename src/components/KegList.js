import React from "react";
import Keg from "./Keg";

function KegList(props) {
  return (
    <React.Fragment>
      <p>This is a keg list</p>
      <Keg />
    </React.Fragment>
  );
}

export default KegList;