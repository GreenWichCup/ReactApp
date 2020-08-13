import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: Array.from({ length: this.props.maxBox }),
    };
  }
  static defaultProps = {
    maxBox: 16,
  };

  render() {
    return (
      <div className="BoxContainer">
        {this.state.boxes.map((index) => {
          return <Box key={index} />;
        })}
      </div>
    );
  }
}

export default BoxContainer;
