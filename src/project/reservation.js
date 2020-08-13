import React, { Component } from 'react';

class Reservation extends Component {
    constructor(props){
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange=this.handleInputChange.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.name === 'isGoing'? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }
    onClickHandler(event) {
        event.preventDefault();
        alert(this.state.numberOfGuests + " guests is going!!");
    }
    render() { 
        return (  
            <form onClick={this.onClickHandler}>
                <label>
                    Is going:
                    <input
                        name='isGoing'
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type='number'
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <button type='submit'>Click me</button>
            </form>
        );
    }
}
 
export default Reservation;