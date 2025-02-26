import React, { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
      console.log("Message mounted")
    
      return () => {
        console.log("Message unmounted")
      }
    }, [])
    
  return (
    <>
      <h1>Usuario ya existe</h1>
    </>
  )
}

export default Message
