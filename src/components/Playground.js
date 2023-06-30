import React from "react";
import Die from "./Die";

export default function Playground (props) {

    const dies = props.ids.map(id => (

        <Die
            key = {id}
            number = {props.diesNumbers[id]}
            handleLock = {() => props.handleLock(id)}
            class = {props.locks[id]===1? "die lock" : "die"}
        />
    ))

    return (

        <div className="playground-container"> 

            <div className="playground">

                {dies}

            </div>

            <button className="roll" onClick={props.handleNewRoll}>{props.buttonContent}</button>

        </div>

    )
}