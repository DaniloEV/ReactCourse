import React from 'react'


const FirstTaskCreate = () => {
  return (
    // !Nota Fragment, puedo dejarlo así sin valor el html,
    //  que React reconoce que es un padre con sus hijos, siempre y cuando estén en un mismo nivel los hijos
    <>
      <h2>02- Fragment</h2>
      <h1>   This is My  First Task Create</h1>
      <h1>   This is My  First Task Create 2</h1>
      <h1>   This is My  First Task Create 3</h1>
    </>
  )
}

export default FirstTaskCreate
