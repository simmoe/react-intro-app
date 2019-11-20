import React from 'react'
import './App.css'
import Component from './components/Component'
import List from './components/List'

const App = () => {

  const names = ['lars', 'bettina', 'per']  

  return (
    <div className="App">
      <h1>Min første react app kanskje inshallah</h1>
      <Component />
      {
        names.map( name => <List name={name} /> )
      }
    </div>
  )
}

export default App
