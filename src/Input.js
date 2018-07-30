import React, { Component } from 'react';


const inputChange= (props) =>{
    return(
        <div>
            <input type = "text" onChange = {props.change} />
            {/* <p>This paragraph is {this.state.inputs} </p> */}
            <p>This paragraph is {props.length} </p>
            <p>{props.reminder}</p>

        </div>
        
    )
   
}

export default inputChange;