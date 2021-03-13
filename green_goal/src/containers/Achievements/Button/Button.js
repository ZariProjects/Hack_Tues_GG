import React from 'react';

const button = (props) =>{
    return (
        <div>
            <button disabled={props.buttonDisabled} onClick = {props.clicked} >Achievе</button>
        </div>
    );
}

export default button;