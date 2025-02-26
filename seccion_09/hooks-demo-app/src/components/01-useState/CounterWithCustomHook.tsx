import React from 'react'
import { useCounter } from './hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { counter, decrement, increment, incrementParameter, resetCounter } = useCounter(10);

    return (
        <div>
            <h4> Counter with Hook custom . VALOR:  {counter}</h4>
            {/* !NOTA NO OCUPA EL () =>, PORQUE VIENE IMPLICITO */}
            <button className=' btn btn-primary m-1' onClick={increment}> +1 </button>
                   {/* !NOTA AHORA EN ESTE CASO SI LO OCUPA POR EL TEMA DEL PARAMETRO */}
            <button className=' btn btn-primary m-1' onClick={() => incrementParameter(2)}> +2 POR PARAMETRO </button>
            <button className=' btn btn-primary m-1' onClick={resetCounter}> Reset </button>
            <button className=' btn btn-primary m-1' onClick={decrement}> -1 </button>
        </div>
    )
}
