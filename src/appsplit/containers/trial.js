import React, { Component } from 'react';
import Person from './components/person';
import classes from './trial.css';
import Cockpit from './components/cockpit';

class Trial extends Component {
    state = {
        persons: [
            {id: 'qwe1', name: 'Ankita', age: 26},
            {id: 'asd2', name: 'max', age: 28}
        ],
        otherState: 'some other value',
        showPersons: false
    };
    nameChangedHandler=(event, id)=>{
        const personIndex= this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        this.setState ({persons: persons});
    }
    deletePersonHandler=(personIndex)=>{
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }
    togglePersonHandler=()=>{
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    render() { 
        let persons = null;
        if (this.state.showPersons){
            persons = <Person
                persons={this.state.persons}
                clicked = {this.deletePersonHandler}
                changed={this.nameChangedHandler}/>               
        }
        return (
            <div className={classes.Trial}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>
                {persons}
            </div>          
        );
    }
}
 
export default Trial;