import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: "Please write an essay about your favorite DOM element."};
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlechange(event) {
        this.setState({value: event.target.value})
    }
    handlesubmit(event) {
        alert('An Essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() { 
        return (
            <form onSubmit={this.handlesubmit}>
                <label>
                    Essay:
                    <textarea value = {this.state.value} onChange={this.handlechange}/>
                </label>
                <input type = 'submit' value = 'submit' />
            </form>
        );
    }
}
 
export default NameForm;