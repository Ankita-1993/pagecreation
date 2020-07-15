import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLogedIn: false}; 
    }
    handleLoginClick() {
        this.setState({isLogedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLogedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLogedIn;
        let Button;
        if (isLoggedIn) {
            Button = <LogoutButton onClick = {this.handleLogoutClick}/>
        } else {
            Button = <LoginButton onClick = {this.handleLoginClick}/>
        }
        
        return (
            <div>
                <Greeting isLoggedIn = {isLoggedIn}/>
                {Button}
            </div>
        );
    }
}
 
export default LoginControl;