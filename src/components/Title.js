import React from "react";

export default function Title (props) {


    return (

        <div className="title-container">
            <p className="title">Tenzies</p>

            {/* should be props.desc */}
            <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            
            <p className="message">{props.message}</p>
        </div>
    )

}