import React from 'react';
import './person.css';
const Person=(props) =>{
    return (
        <div>
            <p>I am {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default Person;