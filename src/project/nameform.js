import React, { Component } from 'react';
import './nameform.css';

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
            <div >
                <form onSubmit={this.handlesubmit} className="nameform">
                    <label className="nameform">
                        Essay:
                        <textarea value = {this.state.value} onChange={this.handlechange}/>
                    </label><br/>
                    <input type = 'submit' classname="nameform" value = 'submit' />
                </form>
            </div>
        );
    }
}
 
export default NameForm;