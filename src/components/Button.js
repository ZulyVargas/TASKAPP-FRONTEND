import React from 'react';
import '../styles/Button.css'

function Button(props){
    console.log(props.content)
    return(
        <button class="button button1" type={props.type} >{props.content}</button>
    )
}

export default Button;