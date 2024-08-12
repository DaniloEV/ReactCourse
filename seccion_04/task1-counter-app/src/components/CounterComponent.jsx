import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CounterComponent = ({ counter }) => {

  console.log("render nuevo")
  // !NOTA con el cambio de estados el componente se vuelve a cargar por cada cambio, cuidao con esto!
  function clickEvent(event, counter2) {
    console.log("🚀 ~ clickEvent ~ params:", counter)
    console.log("🚀 ~ clickEvent ~ event:", event)
    //No funciona porque se utiliza con hooks
    counter = counter++;
  }

  function clickEventHook(event) {
    // setCounterValue(counterValue + 1)
    // !NOTA ENVIAR VALOR POR MEDIO DE FUNCIÓN, ambas funcionan igual
    setCounterValue((x) => x + 1)
  }


  function sum(params) {
    setCounterValue((x) => x + 1)
  }

  function min(params) {
    setCounterValue((c) => c - 1)
  }

  function reset(params) {
    setCounterValue((x) => counter)
  }


  // constantes para no modificar el valor, solo con el argument, toma el valor inicial del prop
  const [counterValue, setCounterValue] = useState(counter);

  return (
    <>
      <h1>CounterApp</h1>
      <h6>El valor que ahora se controla es el del state no el del prop</h6>
      <h2> Valor prop {counter} </h2>

      <h2> Valor useState {counterValue} </h2>
      {/* El valor que ahora se controla es el del state no el del prop */}

      <button className='button' onClick={(event) => clickEvent(event, counter)}> Aumentar Console</button>

      <button className='button' onClick={(event) => clickEventHook(event)}> Aumentar Hook</button>


      <div className='divContainer'>
        <button className='button' onClick={(event) => sum(event)}> +1</button>

        <button className='button' onClick={(event) => min(event)}> -1</button>

        <button className='button' onClick={(event) => reset(event)}> Reset</button>
      </div>
    </>
  )
}



CounterComponent.propTypes = {
  // isRequired permite para saber si es requerido o no un campo
  counter: PropTypes.number.isRequired
}


export default CounterComponent
