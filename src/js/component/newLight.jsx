import React from "react";

const NewLight = ({props}) => {
    return (
        <div onClick={props.onClick} className={`traffic-light ${props.color} rounded-circle`}>
                
        </div>
    )
}

export default NewLight