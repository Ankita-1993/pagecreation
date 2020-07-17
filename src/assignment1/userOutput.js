import React from 'react';
import './userOutput.css';
const UserOutput =(props)=>{
    return (
        <div className='UserOutput'>
            <p>Following is employees details!</p>
            <p>name: {props.name} age: {props.age}</p>
        </div>
    );
};
export default UserOutput;