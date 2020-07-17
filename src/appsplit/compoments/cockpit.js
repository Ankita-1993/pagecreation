import React from 'react';
import classes from './cockpit.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass='';
    if (props.showPersons) {
        btnClass=classes.Red;
    }
    if (props.persons.length<=2){
        assignedClasses.push(classes.red);
    }
    if (props.persons.length<=1){
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am areact app!</h1>
            <p className={assignedClasses.join(' ')}>Hey there!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>
                Toggle person
            </button>
            {person}
        </div>
    );
}
export default Cockpit;