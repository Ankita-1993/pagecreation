import React, { Component } from 'react';
import UserInput from './userInput';
import UserOutput from './userOutput';
class App extends Component {
    state = {
       username: 'ankita',
       age: '26'
    };    
    changeHandler=(event)=>{
        this.setState({username: event.target.value, age: event.target.value});
        
    }
    render() {
        return (
            <div className= 'App'>
                <UserInput changed={this.changeHandler} currentName={this.state.username}currentAge={this.state.age}/>
                <UserOutput changed={this.changeHandler} name= {this.state.username} age={this.state.age}/>              
            </div>
        );
    }
}
 
export default App;