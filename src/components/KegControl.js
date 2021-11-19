import React from "react";
import KegList from "./KegList";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return(
      <React.Fragment>
        <KegList />
      </React.Fragment>
    );
  }
}

export default KegControl;