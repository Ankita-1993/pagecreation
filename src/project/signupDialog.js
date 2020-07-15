import React, { Component } from 'react';
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
function Dialog(props){
    return(
        <FancyBorder color = 'blue'>
            <h1 className='Dialog-title'>
                {props.title}
            </h1>
            <p className='Dialog-message'>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}
class SignUpDialog extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }
    
    render() { 
        return (
            <Dialog title= "Mars exploration program"
                    message = 'How should we refer to you?'>
                <input value = {this.state.value}
                       onChange = {this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>

            </Dialog>
        );
    }
    handleChange(e){
        this.setState({login: e.target.value});
    }
    handleSignUp(e){
        alert(`welcome abroad ${this.state.login}!`);
    }
}
 
export default SignUpDialog;