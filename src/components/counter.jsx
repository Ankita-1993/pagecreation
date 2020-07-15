import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };
    // Constructor() {
        // super();
        // this.handleIncreament = this.handleIncreament.bind(this);
        // console.log('Constructor', this);
    // }
    handleIncreament = () => {      
        this.setState({value: this.state.value + 1});
    };
    // doHandleIncrement = () => {
    //     this.handleIncreament({ id: 1 });
    // };
    render() {  
        console.log(this.state.value); 
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handleIncreament} 
                    className='btn btn-secondary btn=sm'
                >
                    Increament
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value===0? 'warning': 'primary';
        return classes;
    }
    formatCount() {
        const {value} = this.state;
        return value=== 0? 'zero': value;
    }
}
 
export default Counter;