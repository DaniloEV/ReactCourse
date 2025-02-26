import React, { useState } from 'react'

const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })


    return (
        <div>
            <h4>Counter1 {state.counter1}</h4>
            <h4>Counter2 {state.counter2}</h4>
            <h4>Counter3 {state.counter3}</h4>
            <div>
                <button className='btn btn-info' onClick={() => setCounter({
                    ...state,
                    ["counter1"]: state.counter1 + 1
                    })}>+1</button>
            </div>
        </div>
    )
}

export default CounterApp
