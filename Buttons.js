import React from "react"


function Buttons(props) {
    console.log(props);
    return (
        <div>
             <button 
                className= 
                    {`
                    ${props.variant ? props.variant : ""}
                    ${props.size ? props.size : ""}
                    ${props.disable ? props.disable : ""}
                    ${props.StartIcon ? props.StartIcon : ""}  
                    `}
             >
                {props.children}
            </button>
        </div>        
    );
}


export default Buttons;

