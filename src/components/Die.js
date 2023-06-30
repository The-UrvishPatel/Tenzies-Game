import React from "react";

export default function Die (props) {

    return (

            <div className={props.class} onClick={props.handleLock}>

                <span className="die-number">{props.number}</span>

            </div>
    
    )

}