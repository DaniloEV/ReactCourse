import { useState } from "react"

export function useCounter(paramaterCounter:number) {
    let [counter, setCounter] = useState(paramaterCounter)    


    function increment( ) {
        console.log("entra")
        setCounter(counter + 1)
    }
    function incrementParameter( valueCounterIncrement : number ) {
        console.log("entra")
        setCounter(counter + valueCounterIncrement)
    }
    function decrement() {
        setCounter(counter - 1)
    }

    function resetCounter() {
        setCounter(paramaterCounter)
    }
    return {
        counter,
        increment,
        incrementParameter,
        decrement,
        resetCounter
        
    }
}