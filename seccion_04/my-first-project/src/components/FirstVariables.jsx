import React from 'react'

const newMessage = "Danilo";
const newBoolean = true;
const newArray = [1, 2, 3, 4, 5, 6]

const newMessageObject = {
  nombre: "Danilo",
  edad: 24
}


function getName(name) {
  return `Hola soy: ${name} desde la función`
}

// !Nota getNameAsync va a presentar error
function getNameAsync(name) {
  return `Hola soy: ${name} desde la función`
}
const FirstVariables = () => {
  return (
    <>
      <h2>03 - Variables</h2>
      <h2> Hola Soy : {newBoolean}</h2>
      <h2> Hola Soy un boolean {newMessage}</h2>
      <h2> Hola Soy un array {newArray}</h2>
      <code> Hola Soy un objeto {JSON.stringify(newMessageObject)}</code>
      <h2> {getName("Danilo")}</h2>

    </>
  )
}

export default FirstVariables
