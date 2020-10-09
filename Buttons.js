import React from "react"


function Buttons(props) {
    console.log(props);
    return (
        <div>
             <button 
                className= 
                    {props.variant ? {backgroundColor: "blue"} : ""}
             >
                {props.children}
            </button>
        </div>        
    );
}




export default Buttons;

