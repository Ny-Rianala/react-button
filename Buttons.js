import React from "react"


function Buttons(props) {
    return (
        <div>
             <button className="buttons" onClick={props.handleClick} >Default</button>
        </div>      
           
    );
}




export default Buttons;

