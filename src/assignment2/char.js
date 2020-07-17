import React from 'react';
const Char = (props) => {
    const style={
        display: 'inline-block',
        border: '1px solid black',
        margin: '16px',
        padding: '16px',
        color: 'blue',
        textAlign: 'center'

    }
    return(
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
}
export default Char;