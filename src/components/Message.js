import React from "react";

class Message extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            message:props.message
        }
    }

    changeMessage(){
        this.setState({
            message:"Reach Your Goals"
        });
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()} className="btn btn-primary btn-lg">Action</button>
            </div>
        )
    }
}

export default Message;