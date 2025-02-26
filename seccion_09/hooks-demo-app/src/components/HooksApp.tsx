import React from 'react'
import CounterApp from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import SimpleForm from './02-useState/SimpleForm'

const HooksApp = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <hr />
      <h1>Counter 01</h1>
      {/* <CounterApp></CounterApp> */}
      <CounterWithCustomHook></CounterWithCustomHook>
      <hr />
      <hr />
      <h1>Use Effect - Simple Form 02</h1>
      <SimpleForm></SimpleForm>
      <hr />
    </div>
  )
}

export default HooksApp
