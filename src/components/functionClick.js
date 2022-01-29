import React from "react";


 const FunctionClick=()=>{
    console.log("button clicked");
    return (
        <button className="btn btn-primary btn-lg"
        style={{marginTop:"20px"}} onClick={FunctionClick}>onClick</button>
    );
}


export default FunctionClick;
