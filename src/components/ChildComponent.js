import React from "react";

function ChildComponent(props) {
  return (
    <button
      className="btn btn-lg btn-primary"
      onClick={() => props.call("child")}
    >Parent</button>
  );
}

export default ChildComponent;
