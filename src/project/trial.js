import React, { Component } from 'react';
import Person from './person';
import './person.css'
class Trial extends Component {
    state = {
        person: [
            {name: 'Ankita', age: 26},
            {name: 'max', age: 28}
        ],
        otherState: 'some other vaalue' 
    };
    switchNameHandler = () => {
        // console.log('Was clicked!')
        this.setState({
            person: [
                {name: 'Ankita', age: 26},
                {name: 'abhay', age: 32}
            ]
        });
    }
    render() { 
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className='person'>
                <h1>Hi, I am areact app!</h1>
                <p>Hey there!</p>
                <button style={style} onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}> My Hobby is racing!</Person>
                <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
            </div>
        );
    }
}
 
export default Trial;