import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {num1: '', num2: '', value: '+'};
        this.changeHandler = this.changeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    changeHandler(event) {
        this.setState({num1: event.target.value, num2: event.target.value, value: event.target.value});
    }
    onClickHandler(event) {
        event.preventDefault();
        alert('Operation is done!!!!')
    }
    render() { 
        return (
            <form onChange={this.changeHandler} onSubmit={this.onClickHandler}>
                <h>Start the Calculation:</h>
                Enter number1:
                <input
                    name= 'num1'
                    type='text'
                    placeholder= 'number1'
                    onChange={this.changeHandler}/>
                <br/>
                Enter number2:
                <input
                    name='num2'
                    type='text'
                    placeholder='number2'
                    onChange={this.changeHandler}/>
                <br/>
                Choose operator:
                <label>
                    <select value={this.state.value} onChange={this.changeHandler}>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                    </select>
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}
 
export default Calculator;