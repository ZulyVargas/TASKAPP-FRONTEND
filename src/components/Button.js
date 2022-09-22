import React from 'react';
import '../styles/Button.scss'

function Button(props){
    console.log(props.content)
    return(
        <button className="button button1" type={props.type} >{props.content}</button>
    )
}

export default Button;