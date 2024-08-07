import React from 'react'
import PropTypes from 'prop-types'


// !Nota props , proptypes, defaultprops son las que fluyen del padre hacía el hijo donde esté colocado, es como los inputs de angular que se le manda la info
const FirstProps = ({title, segundaProp}) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{segundaProp + 1}</h1>

    </>
  )
}
// !Nota Los PropTypes permite definir los tipos de propiedad, requeridos, etc
FirstProps.propTypes = {
  // isRequired permite para saber si es requerido o no un campo
 title: PropTypes.string.isRequired
}

// defaultProps Se encuentran antes de los propTypes
FirstProps.defaultProps = {
 title: "No hay titulo"
}

export default FirstProps
