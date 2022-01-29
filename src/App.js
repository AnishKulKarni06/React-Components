import React from "react";
import Greet from "./components/Greet";
import Name from './components/name';
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/functionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentClass from "./components/ParentClass";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import './styles.css';


class App extends React.Component{
    render(){
        return (
            <div className="center">
                 <Name/>
                <Greet name="Sumonth" age="20" />
                <Welcome/>
                <Message message="Learn Learn Learn earn"/>
                <Counter/>
                <FunctionClick/>
                <ClassClick/>
                <EventBind/>
                <ParentClass/>
                <UserGreeting/> 
                <NameList/>
            </div>
        )
    }
}

export default App;