import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <p>Input some text here:</p>
            <input type='text' onChange={props.changed} value={props.username}/>
        </div>
    );
}

export default userInput;