import React, { Component } from 'react';

class FlavourForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: 'coconut'}
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlechange(event) {
        this.setState({value: event.target.value});
    }
    handlesubmit(event) {
        alert('A flavour is added: '+ this.state.value);
        event.preventDefault();
    }
    render() { 
        return (
            <form onSubmit={this.handlesubmit}>
                <label>
                    Pick your favorite flavour: 
                    <select value={this.state.value} onChange={this.handlechange}>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='mango'>Mango</option>
                        <option value='coconut'>Coconut</option>
                    </select>
                </label>
                <input type = 'submit' value= 'submit'/>
            </form>
        );
    }
}
 
export default FlavourForm;