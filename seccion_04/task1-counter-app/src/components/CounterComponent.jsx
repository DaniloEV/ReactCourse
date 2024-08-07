import React from 'react'
import PropTypes from 'prop-types'

const CounterComponent = ({counter}) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
    </>
  )
}


CounterComponent.propTypes = {
    // isRequired permite para saber si es requerido o no un campo
    counter: PropTypes.number.isRequired
}
  

export default CounterComponent
