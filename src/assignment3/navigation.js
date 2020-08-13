import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import './Navigation.css'


class Navigation extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand >
                            <Link style={{textAlign: 'center', color: 'black'}} to="/userlist">User List</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}
 
export default Navigation;