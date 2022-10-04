import React from 'react';
import '../styles/Button.scss'

function Button(props){
    return(
        <button className="button button1" type={props.type} onClick={props.onClick} >{props.content}</button>
    )
}

export default Button;