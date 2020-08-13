import React, { Component } from 'react';
import './signupform.css'

class Signupform extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
            // username: '',
            // age: null,
            // errormessage: ''
        };
    }
    myChangeHandler=(event)=>{
        let fname = event.target.firstname;
        let lname= event.target.lasttname;
        let email = event.target.email;
        // let val = event.target.value;
        // let err = '';
        // if (nam==='age'){
        //     if(val !== "" && !Number(val)) {
        //         err = <strong>Your age must be a number.</strong>;
        //     }
        // }
        // this.setState({errormessage: err});
        this.setState({firstname: fname, lastname: lname, email: email})
    }
    mySubmitHandler=(event)=>{
        event.preventDefault();
        alert('Form is submitted!')
    }
    render() { 
        return (  
            <form onSubmit={this.mySubmitHandler} >
                <h1>Hello {this.state.firstname} {this.state.lastname} {this.state.email}</h1>
                <p>Enter your firstname:</p>
                <input
                    type = 'text'
                    placeholder= "fname"
                    name = 'firstname'
                    onChange = {this.myChangeHandler}
                />
                <p>Enter your lastname:</p>
                <input
                    type = 'text'
                    placeholder='lname'
                    name = 'lastname'
                    onChange = {this.myChangeHandler}
                />
                <p>Enter your email:</p>
                <input
                    type = 'text'
                    placeholder='email'
                    name = 'email'
                    onChange = {this.myChangeHandler}
                />
                {/* {this.state.errormessage} */}
                <br/>
                <br/>
                <input type = 'Submit'/>
            </form>
        );
    }
}
 
export default Signupform;