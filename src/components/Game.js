import React from "react";
import Title from "./Title";
import Playground from "./Playground";

export default function Game () {


    //assigned id to each dies
    
    const ids = [0,1,2,3,4,5,6,7,8,9]
    
    
    const [message, setMessage] = React.useState("")
    
    const [Tenzies, setTenzies] = React.useState(false)     //to indicate game over and start new
    
    const [locks, setlocks] = React.useState([0,0,0,0,0,0,0,0,0,0])

    const [diesNumbers, setDiesNumbers] = React.useState([]);





    //utility function for generating random number and checking game over situation

    function getNumber (id) {

        if(id!==-1 && locks[id]===1)
        return diesNumbers[id]
        else
        return Math.floor(Math.random() * 5 + 1)
    }






    // locks manager

    
    function newLock (id) {
        
        let newlocks = [];
        
        for(let i=0;i<10;i++) {
            
            if(locks[i]===0 && i===id)
            newlocks.push(1);
            else
            newlocks.push(locks[i]);
        }

        setlocks(newlocks)
    }
    




    // dies number manager


    function newDies () {

        const newDiesNumbers = [];

        for(let i=0;i<10;i++) {

            newDiesNumbers.push(getNumber(i))
        }

        setDiesNumbers(newDiesNumbers)
    }

    



    // to fill up the dies on first load

    React.useEffect(() => {

        newDies()
    
    }, [])

    React.useEffect(() => {

        let count = 0

        for(let i=0;i<10;i++)
        {
            if(locks[i]===1)
            count++;
        }

        if(count===10)
        setTenzies(true)

    }, [locks])


    React.useEffect(() => {

        let firstValue = diesNumbers[0];
        
        let allSame = diesNumbers.every(number => (
            number===firstValue? true : false ))
            

        if(Tenzies===true)
        {
            if(allSame===true)
            setMessage("Congratulations!✨")
            else
            setMessage("Try Again!🫡")
        }

    }, [Tenzies])
    
    



    // to star over the game

    function startOver () {
        
        setTenzies(false)
        setlocks([0,0,0,0,0,0,0,0,0,0])
        setMessage("")

        const newDiesNumbers = [];

        for(let i=0;i<10;i++) {

            newDiesNumbers.push(getNumber(-1))        
        
        }

        setDiesNumbers(newDiesNumbers)
    }


    return (

        <div className="game">
            <Title 
                message = {message}
            />
            <Playground 
                ids = {ids}
                diesNumbers = {diesNumbers}
                locks = {locks}
                handleLock = {newLock}
                handleNewRoll = {Tenzies===false? newDies : startOver}
                buttonContent = {Tenzies===false? "Roll" : "Restart"}
            />
        </div>
    )
}