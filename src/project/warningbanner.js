import React, { Component } from 'react';
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div classname = 'warning'>
            warning!
        </div>
        

    );
}
class page extends Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState( state => ({
            showWarning: !state.showWarning
        }));
    }
    render () {
        return (
            <div>
                <WarningBanner warn = {this.state.showWarning}/>
                <button onClick = {this.handleToggleClick}>
                    {this.state.showWarning? 'Hide': 'Show'}
                </button>
            </div>
        );
    }
}
 
export default page;