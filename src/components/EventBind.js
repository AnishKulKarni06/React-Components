import React from "react";

class EventBind extends React.Component{

    constructor(props){
        super(props);
        this.state={
            message:"Hello"
        }
        this.eventHandler=this.eventHandler.bind(this);
    }

    eventHandler(){
        this.setState({
            message:"Good Bye"
        });
    }
    render(){
        return(
            <div style={{marginTop:"20px"}}>
                <p>{this.state.message}</p>
                <button className="btn btn-lg btn-danger" onClick={this.eventHandler}>Event</button>
            </div>
        )
    }

}

export default EventBind;