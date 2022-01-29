import React from "react";

class ClassClick extends React.Component{
    clickHandler(){
        console.log("Button clicked");
    }

    render(){
        return(
            <div>
                <button className="btn btn-lg btn-danger"
                style={{marginTop:"15px"}} onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick;