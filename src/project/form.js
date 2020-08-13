import React, { Component } from 'react';
import './form.css';
class Myform extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        };
    }
    myChangeHandler=(event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam==='age'){
            if(val !== "" && !Number(val)) {
                err = <strong>Your age must be a number.</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val})
    }
    mySubmitHandler=(event)=>{
        event.preventDefault();
        alert('Form is submitted!')
    }
    render() { 
        return (  
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type = 'text'
                    placeholder= "username"
                    name = 'username'
                    onChange = {this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type = 'text'
                    placeholder='age'
                    name = 'age'
                    onChange = {this.myChangeHandler}
                />
                {this.state.errormessage}
                <br/>
                <br/>
                <input type = 'Submit'/>
            </form>
        );
    }
}
 
export default Myform;