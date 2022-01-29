import React from "react";

const Greet=(props)=>{
    return(
        <div className="greet">
            <h1>Hi {props.name},Welcome to React World.</h1>
            <p>Your age {props.age}</p>
        </div>
    )
}

export default Greet;