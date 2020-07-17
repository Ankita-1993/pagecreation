import React from 'react';
const UserInput = (props) => {
    const style = {
        backgroundColor: 'red'
    }
    return (
        <div>
            <p>Enter your name!</p>
            <input 
            type='text' 
            style = {style}
            name= 'username'
            onChange={props.changed} 
            value={props.currentName}/><br/>
            <p>Enter your age!</p>
            <input
            type='text'
            style={style}
            name='age'
            onChange={props.changed}
            value={props.currentAge}/>
        </div>
    );
};
export default UserInput; 