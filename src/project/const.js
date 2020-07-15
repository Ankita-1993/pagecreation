import React, { useState } from 'react';
import Person from './person';

const Details = props => {
    const [personState, setPersonState] = useState({
        person: [
            {name: 'Ankita', age: 26},
            {name: 'max', age: 28}
        ]
    });
    // const [otherState, setOtherState] = useState('some other value');
    // console.log(personState, otherState);

    const switchNameHandler = () => {
        // console.log('Was clicked!')
        setPersonState({
            person: [
                {name: 'Ankita', age: 26},
                {name: 'abhay', age: 32}
            ]
        });
    };
    return (
        <div>
            <h1>Hi, I am areact app!</h1>
            <p>Hey there!</p>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personState.person[0].name} age={personState.person[0].age}> My Hobby is racing!</Person>
            <Person name={personState.person[1].name} age={personState.person[1].age}/>
        </div>
    );
}
export default Details;
