import React from "react";
import ChildComponent from "./ChildComponent";
class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "parent class",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(child) {
    alert(`hello ${this.state.message} from ${child}`);
  }
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <ChildComponent call={this.clickHandler}/>
      </div>
    );
  }
}

export default ParentClass;
