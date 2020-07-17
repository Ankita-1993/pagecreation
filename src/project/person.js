import React from 'react';
import './person.css';
const Person=(props) =>{
    const style = {
        '@media (minWidth=500px)': {
            width: '450px'
        }
    }
    return (
        <div className='person'>
            <p onClick={props.click}> I am {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
            <input 
                type='text' onChange={props.changed} value={props.name}/>
                
        </div>
    );
};

export default Person;