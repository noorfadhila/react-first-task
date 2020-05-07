import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='userOutput'>
            <p>This is just a paragraph output user: {props.username}
                <br/><span>{props.children}</span>
            </p>
        </div>
    )
}

export default userOutput;