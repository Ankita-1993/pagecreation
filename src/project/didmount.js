import React, { Component } from 'react';
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {favoritecolor: 'red'}
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: 'Yellow'})
        }, 1000);
    }
    render() { 
        return <h1>My favorite color is {this.state.favoritecolor}!</h1>;
    }
}
 
export default Header;