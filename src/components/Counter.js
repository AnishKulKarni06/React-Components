import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    handleCount(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }));
    }

    incrementByFive(){
        this.handleCount();
        this.handleCount();
        this.handleCount();
        this.handleCount();
        this.handleCount();
    }

    render(){
        return(
            <div class="counter">
                <h2>Count : {this.state.count}</h2>
                <button className="btn btn-primary btn-lg"
                 onClick={()=>this.incrementByFive()}>Increment</button>
            </div>
        )
    }


}


export default Counter;