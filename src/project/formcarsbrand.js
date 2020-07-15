import React, { Component } from 'react';
class Mycar extends Component {
    constructor(props){
        super(props)
        this.state = {value: 'Volvo'}
    }

    myChangeHandler=(event)=>{
        this.setState({value: event.target.value});
    }
    mySubmitHandler=(event)=>{
        alert('Mycar ' + this.state.value +' is submitted');
        event.preventDefault();
    }
    render() { 
        return (  
            <form onSubmit={this.mySubmitHandler}>
                <h1>My favorite cars!</h1>
                <p>Choose your one of favorite cars</p>
                <label>
                    <select value={this.state.value} onChange={this.myChangeHandler}>
                        <option value='ford'>Ford</option>
                        <option value='Volvo'>Volvo</option>
                        <option value='Nexa'>Nexa</option>
                        <option value='Tata'>Tata</option>
                    </select>
                </label>
                <input type='submit'/>
            </form>
        );
    }
}
 
export default Mycar;